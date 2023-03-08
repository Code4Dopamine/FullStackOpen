import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

const Button = ({ text, handleClick, className }) => {
  return (
    <button className={className} onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <p>{text}: {value}</p>
  )
}

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  let average = parseFloat((props.good - props.bad) / (props.good + props.neutral + props.bad)).toFixed(4)
  let positive = parseFloat(props.good / (props.good + props.neutral + props.bad) * 100).toFixed(2)

  // console.log("all:",all)
  // console.log("average:",average)
  // console.log("positive:",positive)

  if (all === 0) {
    return (
      <>
        <h1 className='py-5'>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h1 className='py-5'>Statistics</h1>
      <div>
        <StatisticLine text={"good"} value={props.good} />
        <StatisticLine text={"neutral"} value={props.neutral} />
        <StatisticLine text={"bad"} value={props.bad} />

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

  //UseState Increment Click Counter
  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)


  return (
    <div>
      <h1>Give Feedback</h1>
      <div className='py-5'>
        <Button className='btn btn-success' text={"good"} handleClick={handleClickGood} />
        <Button className='btn btn-warning' text={"neutral"} handleClick={handleClickNeutral} />
        <Button className='btn btn-error' text={"bad"} handleClick={handleClickBad} />
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App