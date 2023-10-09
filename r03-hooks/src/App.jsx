import { useState } from 'react'
import {useRandom, useTimeout, useFetch} from "./hooks"

import './App.css'

function App() {
  const x = useRandom(0,100);
  const [message, setMessage] = useState("Loading data");
  useTimeout(()=>{setMessage("Loaded")}, 2000);
  const {data, isLoading, err} = useFetch("http://numbersapi.com/random/year");
  return (
    <>
      <div>{x}</div>
      <div>{message}</div>
      {isLoading && <p>Loading</p>}
      {err && <p>Chyba</p>}
      {
      data !== null
      ?
      <p>{data}</p>
      :
      <p>?</p> 
      }
    </>
  )
}

export default App
