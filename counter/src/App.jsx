import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const addValue = () => {
    counter++;
    setCounter(counter);
    //console.log(counter);
  }

  const subtratValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
    }
    else{
      setCounter(counter = 0)
    }
  }
  
  let [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={subtratValue}>subtract value</button>
    </>
  )
}

export default App
