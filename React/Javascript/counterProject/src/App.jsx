import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  //let counter = 20;

  const addValue = ()=>{
   // counter=counter+1
    if (counter<20){
      setCounter(counter+1)
  }
}

  const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Nagur Subhana</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue} disabled={counter>=20}>Add value</button>
      
      <button onClick={removeValue} disabled={counter<=0}>Remove Value</button>
    </>
  )
}

export default App
