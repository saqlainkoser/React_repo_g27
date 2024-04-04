import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter=10;


function App() {
  // const [count, setCount] = useState(0)
  //Introducing hook

  let [counter,setCount]=useState(10)


  const addOne= () => {
    
    counter=counter+1;
    setCount(counter);
  }

  const subOne= () => {
    
    counter=counter-1;
    setCount(counter);
  }

  return (
    <>
      <h1>This is my React From Vite {counter}</h1>
      <h1>Counter : {counter}</h1>
      <br />
      <br />
      <button onClick={addOne}>Add {counter}</button>
      <button onClick={subOne}>Minus {counter}</button>
    </>
  )
}

export default App
