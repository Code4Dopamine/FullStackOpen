import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target);
    const personObject = {
      name: newName,
    }

    if (persons.find(e => e.name === newName) !== undefined){
      window.alert(`"${newName}" is already added to phonebook`)
    }else if (newName.length > 0){
      setPersons(persons.concat(personObject))
    }

    setNewName('')
  }

  const handleInput = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          <div>debug: {newName} </div>
          name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(e => {
        return <p key={e.name}>{e.name}: #</p>
      })}
    </div>
  )
}

export default App
