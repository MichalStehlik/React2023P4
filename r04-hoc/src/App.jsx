import { useState } from 'react'
import { useAppContext, LOG_IN, LOG_OUT } from "./providers/ApplicationProvider"
import './App.css'
import ProtectedPanel from "./components/ProtectedPanel"

function App() {
  const [{logged}, dispatch] = useAppContext();
  return (
    <>
      {logged 
      ? 
      <button onClick={() => dispatch({type: LOG_OUT})}>Log Out</button> 
      : 
      <button onClick={() => dispatch({type: LOG_IN})}>Log In</button>}     
      <ProtectedPanel />  
    </>
  )
}

export default App
