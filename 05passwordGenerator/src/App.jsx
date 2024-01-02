import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState();

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "123456789" 
    if(charAllowed) str += "!@#$%^&*(){}-_~`\/.,+="
    
    for (let i = 0; i <= length; i++) {
      let char = Math.floor( (Math.random() * str.length +1))
      pass += str.charAt(char)
    }
    setpassword(pass)
    },
    [length, numAllowed, charAllowed, setpassword])

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,99)
      window.navigator.clipboard.writeText(password)
    }, 
    [password])
    useEffect( () => {
      passwordGenerator()
    }, [length, numAllowed, charAllowed, passwordGenerator] )


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef} />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-centergap-x-1'>
        <input type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={ (e) =>{setLength(e.target.value)}} />
        <label> lenght: {length}</label>          
        </div>
        <div className='flex items-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked={numAllowed}
           id='numberInput'
           onChange={ () =>{
            setnumAllowed((prev) => !prev)
            
           }}/>
           <label htmlFor="numberInput">numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked= {charAllowed}
           id='char'
           onChange={ ()=>{
            setcharAllowed((prev) => !prev)
           }} />
           <label htmlFor="characterInput">character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
// w-full max-w-md mx-auto shadow-md  rounded-lg p-x-4 m-8 text-orange-500 bg-gray-700
