import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Note from './components/Note'

// Without Compoent File
// const Note = ({note}) => {
//   return (
//     <li>{note.content}</li>
//   )
// }

const App = ({props, notes}) => {
  // const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          // <li key={note.id}>
          //   {/* {note.content} */}
          // </li>
          <Note key={note.id} note={note}/>
        )}

      </ul>
    </div>
  )
}

export default App
