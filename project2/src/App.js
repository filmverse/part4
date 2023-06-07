import { useState, useEffect } from 'react';
import noteApp from './services/notes';
import Note from './components/Note';
import NoteForm from './components/NoteForm';


const App = () => {

  const [ notes, setNotes ] = useState([])
  const [ newNote, setNewNote ] = useState("")
  const [ showAll, setShowAll ] = useState(true)

  const hook = () => {
    noteApp.getAll().then(response => {
      console.log(response.data)
      const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        important: true,
      }
      setNotes(response.data.concat(nonExisting))
    })
  }
  useEffect(hook, [])

  const addNote = (event) => {
    event.preventDefault()
    const addNote = {
      content: newNote,
      important: Math.random() < 0.5,
    }
    noteApp.create(addNote).then(
      response => {
        setNotes(notes.concat(response.data))
        setNewNote("")
      }
    )
  }

  const removeNote = (id) => () => {
    noteApp.remove(id).then(() => {
      setNotes(notes.filter(note => note.id !== id))
    })
  }

  const toggleNoteImportance = (id) => () => {
    const note = notes.find(note => note.id === id)
    const toggleNote = {...note, important: !note.important}
    noteApp.update(id, toggleNote)
    .then(response => {
      setNotes(notes.map(note => note.id === id ? response.data : note))
    })
    .catch(error => {
      alert(
        `the note "${note.content}" was already deleted from the server`
      )
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  const noteToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const handleChange = (funObj) => (event) => {
    funObj(event.target.value)
  }

  return (
    <div>
      <h2>Notes</h2>
      <button onClick={() => {setShowAll(!showAll)}}>
        show {showAll ? "important" : "all"}
      </button>
      {noteToShow.map(note => <Note key={note.id} note={note} removeNote={removeNote} toggleNoteImportance={toggleNoteImportance} />)}
      <NoteForm addNote={addNote} newNote={newNote} handleChange={handleChange(setNewNote)} />
      <p>Debug: {newNote}</p>
    </div>
  )
}

export default App;