import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Password_generator from './components/Password_generator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Password_generator/>
    </>
  )
}

export default App
