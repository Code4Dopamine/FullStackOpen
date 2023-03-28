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
    // axios
    //   .get('http://localhost:3001/persons')
    //   .then(res => {
    //     console.log('fetched data complete')
    //     setPersons(res.data)
    //   })
    personService.getAll().then(initialPersons => {
      console.log("initPerson:",initialPersons)
      setPersons(initialPersons)
    })
  }, [])


  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target);

    const personObject = {
      name: newName,
      number: newNumber
      // id: persons.length + 1
    }

    const searchPerson = persons.find(e => e.name === newName)
    // console.log("personServiceLog:",personService.getAll())
    // const searchPerson = personService.getAll().find(e => e.name === newName)
    console.log("searchPerson:", searchPerson)

    if (searchPerson !== undefined) {
      if (searchPerson.number === newNumber) {
        window.alert(`"${newName}" is already added to phonebook`)
      } else {
        // console.log("running else")
        window.alert(`"${newName}" is already added to phonebook, replace the old number with a new one?`)
        personService
          .update(searchPerson.id, personObject)
          .then(response => {
            // console.log("response:",response)
            setPersons(persons.map(e => e.id !== searchPerson.id ? e : response))
          })
          // .then()
      }
    } else if (newName.length > 0) {
      // setPersons(persons.concat(personObject))
      // setNewName('')
      // setNewNumber('')
      personService
        .create(personObject)
        .then(returnPerson => {
          setPersons(persons.concat(returnPerson))
          setNewName('')
          setNewNumber('')
        })
    }

    // if (persons.find(e => e.name === newName) !== undefined) {
    //   // Check Name -> Exists => Check Number -> Exist ? Alert : Change Number
    //   // if()
    //   window.alert(`"${newName}" is already added to phonebook`)

    // } else if (newName.length > 0) {
    //   // setPersons(persons.concat(personObject))
    //   // setNewName('')
    //   // setNewNumber('')
    //   personService
    //     .create(personObject)
    //     .then(returnPerson => {
    //       setPersons(persons.concat(returnPerson))
    //       setNewName('')
    //       setNewNumber('')
    //     })
    // }


  }

  // OnChange Handler
  const handleNewName = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleNameFilter = (event) => {
    // console.log(event.target.value)
    setNameFilter(event.target.value)
  }
  const handleDelete = (id, name) => {
    if (window.confirm(`Delete "${name}"?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
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
      <Persons
        filter={nameFilter}
        personList={persons}
        handleDelete={handleDelete}
      />

    </div>
  )
}

export default App
