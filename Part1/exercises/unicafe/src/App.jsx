import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const [all,average,positive] = 0
  
  // let setBad = () => {setBad+=1}

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <button className='btn btn-success' onClick={() => setGood(good+1)}>good</button>
        <button className='btn btn-warning'onClick={() => setNeutral(neutral+1)}>neutral</button>
        <button className='btn btn-error'onClick={() => setBad(bad+1)}>bad</button>
      </div>

      <h1>Statistics</h1>
      <div>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>

        <div className="divider"></div> 

        <p>all: {good+neutral+bad}</p>
        <p>average: {parseFloat((good-bad)/(good+neutral+bad)*100).toFixed(2)} %</p>
        <p>positive: {parseFloat(good/(good+neutral+bad)*100).toFixed(2)} %</p>


      </div>

    </div>
  )
}

export default App