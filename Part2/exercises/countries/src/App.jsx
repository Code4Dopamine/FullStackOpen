import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [result, setResults] = useState({})
  const [countries, setCountries] = useState()

  useEffect(() => {
    console.log('Effect Run')
    axios
      .get(`https://restcountries.com/v3.1/all/`)
      // .then(res => {
        //   setCountries(res.data)
        // })
        .then(res => res.json())
        .then(json => {
          console.log(json)
          setCountries(json)
        })
  },[])

  const handleInput = (event) => {
    // console.log(event.target.value)
    setSearchInput(event.target.value)
  }

  console.log(countries)

  return (
    <div>
      <p>Find Counties <input type="text" value={searchInput} onChange={handleInput} /></p>
      {/* {countries.map(e => {
        <p>{e}</p>
      })} */}
      <p>{countries}</p>
      {/* <pre>
        {JSON.stringify(countries,null,2)}
      </pre> */}
    </div>
  )
}

export default App
