import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import CountriesInfo from './components/CountriesInfo'

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('useEffect Run')
    axios.get(`https://restcountries.com/v3.1/all/`)
      .then(res => {
        console.log(res.data)
        setCountries(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  const handleInput = (event) => {
    setSearchInput(event.target.value)
  }

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  })

  return (
    <div>
      <p>Find Countries: <input type="text" value={searchInput} onChange={handleInput} /></p>
      < CountriesInfo searchInput={searchInput}/>



    </div>
  )
}

export default App
