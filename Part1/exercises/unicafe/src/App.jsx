import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  let average = parseFloat((props.good - props.bad) / (props.good + props.neutral + props.bad)).toFixed(4)
  let positive = parseFloat(props.good / (props.good + props.neutral + props.bad) * 100).toFixed(2)

  // console.log("all:",all)
  // console.log("average:",average)
  // console.log("positive:",positive)

    return (
      <>
        <h1 className='py-5'>Statistics</h1>
        <div>
          <p>good: {props.good}</p>
          <p>neutral: {props.neutral}</p>
          <p>bad: {props.bad}</p>

          <div className="divider"></div>

          <p>all: {all}</p>
          <p>average: {isNaN(average) ? 0 : average}</p>
          <p>positive: {isNaN(positive) ? 0 : positive}</p>

        </div>
      </>
    )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const [average, setAverage] = useState(0)
  // const all = 
  

  return (
    <div>
      <h1>Give Feedback</h1>
      <div className='py-5'>
        <button className='btn btn-success' onClick={() => setGood(good + 1)}>good</button>
        <button className='btn btn-warning' onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button className='btn btn-error' onClick={() => setBad(bad + 1)}>bad</button>
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App