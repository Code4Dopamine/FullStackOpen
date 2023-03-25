import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        console.log('fetched data complete')
        setPersons(res.data)
      })
  }, [])


  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target);

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (persons.find(e => e.name === newName) !== undefined) {
      window.alert(`"${newName}" is already added to phonebook`)

    } else if (newName.length > 0) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    personService
      .create(personObject)
      .then(returnPerson => {
        setPersons(persons.concat(returnPerson))
        setNewName('')
        setNewNumber('')
      })

  }

  // OnChange Handler
  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleNameFilter = (event) => {
    setNameFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleNameFilter} />

      <h2>Add a new</h2>
      <PersonForm
        nameField={newName}
        handleName={handleNewName}
        numberField={newNumber}
        handleNumber={handleNewNumber}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>
      <Persons filter={nameFilter} personList={persons} />

    </div>
  )
}

export default App
