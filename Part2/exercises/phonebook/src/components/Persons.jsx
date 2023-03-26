import React from 'react'

const Persons = ({filter, personList, handleDelete}) => {
    // console.log("List:",personList);
  return (
    personList.filter(e => e.name.toLowerCase().includes(filter))
    .map(e => {
        return <p key={e.name}>{e.name}: {e.number} <button onClick={() => handleDelete(e.id, e.name)}>delete</button></p>
    })
  )
}

export default Persons