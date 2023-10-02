import { useState } from 'react'
import './App.css'
import {List} from "./components/List"
import {Create} from "./components/Create"

function App() {

  return (
    <>
      <List />
      <Create />
    </>
  )
}

export default App
