
import { useState, useEffect } from 'react';
import axios from 'axios';

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
    </div>
  )
}

export default App;