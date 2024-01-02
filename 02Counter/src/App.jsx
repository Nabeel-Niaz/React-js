import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(15)
  //let Counter = 15;
  const addValue = () =>{
    if(Counter<20){
   // Counter = Counter + 1;
    setCounter(Counter +1);
    }
  }

  const removeValue = () =>{
    if(Counter>0 ){
    setCounter(Counter-1)
    }
}
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {Counter}</h2>
      <button
      onClick={addValue}>Add Value {Counter}</button> 
      <br />
      <button onClick={removeValue}>Remove Value {Counter}</button>
      <p>footer: {Counter}</p>
    </>
  )
}

export default App
