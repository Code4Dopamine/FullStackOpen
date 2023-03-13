import React from 'react'

const Header = ({ name }) => {
    return (
        <h1>{name}</h1>
    )
}

const Content = ({ content }) => {
    // content.map(e => console.log("e:", e))
    return (
        <>
            {content.map(e => (
                <Part key={e.id} name={e.name} exercises={e.exercises} />
            )
            )}
        </>
    )
}

const Part = ({ name, exercises }) => {
    return (
        <p>
            {name}: {exercises}
        </p>
    )
}

const Total = ({ parts }) => {
    //Add up course exercises
    const sum = parts.reduce((prev, curr) => {
        return prev + curr.exercises
    }, 0)

    return (
        <p>
            <b>Total of {sum} exercise(s)</b>
        </p>
    )
}

const Course = ({ course }) => {

    return (
        <div>
            <Header name={course.name} />
            <Content content={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course