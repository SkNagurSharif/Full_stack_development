import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div><h1>SUBHANA</h1>
    <h2>Sharif</h2></div>
  )
}

const anotherUser = 'Shaik'

const reactElement = React.createElement(
  'a',
  {href:'',targer:'_blank'},
  'vist page',
  anotherUser
)

/**
 * if above used then following become code
    ReactDOM.createRoot(document.getElementById('root')).render(
      reactElement
)
 */



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

)
