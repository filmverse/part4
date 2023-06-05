
import { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Note';

const baseUrl = 'http://localhost:3001/notes'

const App = () => {

  const [ notes, setNotes ] = useState([])

  const hook = () => {
    axios.get(baseUrl).then(response => {
      console.log(response.data)
      setNotes(response.data)
    })
  }
  useEffect(hook, [])

  return (
    <div>
      <h1>Hello World</h1>
      {notes.map(note => <Note key={note.id} note={note} />)}
    </div>
  )
}

export default App;