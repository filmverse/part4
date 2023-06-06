
const Note = ({ note, removeNote }) => {
    return (
        <div>
            <ul>
                <li>{note.content} <button onClick={removeNote(note.id)}>Delete</button></li>
            </ul>
        </div>
    )
}

export default Note;