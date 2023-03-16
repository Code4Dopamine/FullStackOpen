import React from 'react'

const PersonForm = ({nameField, handleName, numberField, handleNumber, addPerson}) => {
  return (
    <div>
        <form onSubmit={addPerson}>
          <div>
            {/* <div>debug: {nameField},{numberField}</div> */}
            <div>name: <input type="text" pattern="[a-zA-z ]+" value={nameField} onChange={handleName} /></div>
            <div>number: <input type="tel" pattern="^[0-9]+(-[0-9]+)*$" value={numberField} onChange={handleNumber} /> </div>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    </div>
  )
}

export default PersonForm