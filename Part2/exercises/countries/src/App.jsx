import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

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
      {filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filteredCountries.length === 1 ? (
        <div key={filteredCountries[0].name.common}>
          <h2>{filteredCountries[0].name.common}</h2>
          <p>Capital: {filteredCountries[0].capital}</p>
          <p>Area: {filteredCountries[0].area}</p>

          {/* Show list of languages */}
          <h2>Languages</h2>
          <ul>
            {Object.values(filteredCountries[0].languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>

          {/* Show Country Flag */}
          <img style={{ maxWidth: '200px' }} src={filteredCountries[0].flags.svg} alt={`${filteredCountries[0].name.common} flag`} />
        </div>
      ) : (
        filteredCountries.map((country) => (
          <div key={country.name.common}>
            <p>{country.name.common}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default App
