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
      // <p>{props.name} {props.exercise}</p>
      <div>
        <Part name={part1} exercise={exercises1} />
        <Part name={part2} exercise={exercises2} />
        <Part name={part3} exercise={exercises3} />
      </div>
    )
  }
  //Total
  const Total = (props) => {
    return (
      <p>Number of exercises {props.total}</p>
    )
  }

  const Part = (props) => {
    return (
      <p>{props.name} {props.exercise}</p>
    )
  }

  return (
    <div>
      <Header course={course} />

      <Content />

      <Total total={exercises1 + exercises2 + exercises3} />

    </div>
  )
}

export default App
