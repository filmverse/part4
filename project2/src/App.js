
import { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Note';

const baseUrl = 'http://localhost:3001/notes'

const App = () => {

  const [ notes, setNotes ] = useState([])
  const [ newNote, setNewNote ] = useState("")

  const hook = () => {
    axios.get(baseUrl).then(response => {
      console.log(response.data)
      setNotes(response.data)
    })
  }
  useEffect(hook, [])

  const addNote = (event) => {
    event.preventDefault()
    const addNote = {
      content: newNote,
      important: Math.random() < 0.5,
    }
    axios.post(baseUrl, addNote).then(
      response => {
        setNotes(notes.concat(response.data))
        setNewNote("")
      }
    )
  }

  const handleChange = (funObj) => (event) => {
    funObj(event.target.value)
  }

  return (
    <div>
      <h2>Notes</h2>
      {notes.map(note => <Note key={note.id} note={note} />)}
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleChange(setNewNote)}/>
        <button type="submit">save</button>
      </form>
      <p>Debug: {newNote}</p>
    </div>
  )
}

export default App;