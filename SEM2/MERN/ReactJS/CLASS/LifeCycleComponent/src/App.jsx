import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lifecycle from './Lifecycle'

function App() {
  const [count, setCount] = useState(0)

const [show,setShow] = useState(true);
  return (
    <>
      <button onClick={()=>setShow(prev=>!prev)}>Toggle</button>
        
      {show &&<Lifecycle></Lifecycle>}
    </>
  )
}

export default App
