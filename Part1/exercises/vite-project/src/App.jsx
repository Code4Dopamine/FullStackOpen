import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  //Exercise 1.3
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  /*
  Header takes care of rendering the name of the course, 
  Content renders the parts and their number of exercises
  and Total renders the total number of exercises.
  */

  //Header
  const Header = (props) => {
    console.log(props)
    return (
      <h1>{props.course}</h1>
    )
  }
  //Content
  const Content = (props) => {
    console.log("Content"+props)
    console.log(parts)
    return (
      // <p>{props.name} {props.exercise}</p>
      // <div>
      //   <Part name={part1.name} exercises={part1.exercises} />
      //   <Part name={part2.name} exercises={part2.exercises} />
      //   <Part name={part3.name} exercises={part3.exercises} />
      // </div>
      <div>
        {
          props.parts.map(e => {
            return <p>{e.name} {e.exercises}</p>
          })
        }
      </div>
    )
  }
  //Total
  const Total = (props) => {
    console.log(props)
    let sum = 0;
    parts.forEach(e => sum+=e.exercises)
    return (
      <p>Number of exercises {sum}</p>
    )
  }

  //Parts
  // const Part = (props) => {
  //   console.log(props)
  //   return (
  //     <p>{props.name} {props.exercises}</p>
  //   )
  // }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

export default App
