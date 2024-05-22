import { useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import DisplayUsers from './components/DisplayUsers'

function App() {
  const [people, setPeople] = useState([])

  return (
    <>
      <UserForm setPeople = {setPeople}/>
      <DisplayUsers people = {people}/>
    </>
  )
}

export default App
