import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card.jsx'

function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    username : "Nabeel Niaz",
    age : 18,
  }
  let newArr = [1,2,3,4]
  return (
    <>
    <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="Nabeel Niaz" btnText="Click me"/>
    <Card username="Second Name" />
    
    </>
  )
}

export default App
