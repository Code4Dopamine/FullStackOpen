import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [searchInput, setSearchInput] = useState('')

  const handleInput = (event) => {
    // console.log(event.target.value)
    setSearchInput(event.target.value)
  }

  return (
    <div>
      <p>Find Counties <input type="text" value={searchInput} onChange={handleInput} /></p>
    </div>
  )
}

export default App
