import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  /*
  Header takes care of rendering the name of the course, 
  Content renders the parts and their number of exercises
  and Total renders the total number of exercises.
  */

  //Header
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  //Content
  const Content = (props) => {
    return (
      <p>{props.name} {props.exercise}</p>
    )
  }
  //Total
  const Total = (props) => {
    return(
      <p>Number of exercises {props.total}</p>
    )
  }

  return (
    <div>
      <Header course={course} />

      <Content name={part1} exercise={exercises1} />
      <Content name={part2} exercise={exercises2} />
      <Content name={part3} exercise={exercises3} />

      <Total total={exercises1 + exercises2 + exercises3} />

    </div>
  )
}

export default App
