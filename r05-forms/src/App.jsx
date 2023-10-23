import { useState } from 'react'
import './App.css'
import RefForm from "./component/RefForm"
import ClassicForm from "./component/ClassicForm"
import HookForm1 from "./component/HookForm1"
import HookForm2 from "./component/HookForm2"

const App = () => {

  return (
    <>
      <RefForm />
      <ClassicForm />
      <HookForm1 />
      <HookForm2 />
    </>
  )
}

export default App
