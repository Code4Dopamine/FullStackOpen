import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target);

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }

    if (persons.find(e => e.name === newName) !== undefined) {
      window.alert(`"${newName}" is already added to phonebook`)
      
    } else if (newName.length > 0) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }

  }

  const handleNewName = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value);
  }
  const handleNewNumber = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          <div>debug: {newName},{newNumber}</div>
          <div>name: <input type="text" pattern="[a-zA-z ]+"value={newName} onChange={handleNewName} /></div>
          <div>number: <input type="tel" pattern="^[0-9]+(-[0-9]+)*$" value={newNumber} onChange={handleNewNumber} /> </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(e => {
        return <p key={e.name}>{e.name}: {e.number}</p>
      })}
    </div>
  )
}

export default App
