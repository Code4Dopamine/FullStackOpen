import React from 'react'

const Persons = ({filter, personList}) => {
    // console.log("List:",personList);
  return (
    personList.filter(e => e.name.toLowerCase().includes(filter))
    .map(e => {
        return <p key={e.name}>{e.name}: {e.number}</p>
    })
  )
}

export default Persons