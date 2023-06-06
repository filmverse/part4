
const Note = ({ note, removeNote, toggleNoteImportance }) => {
    const lable = note.important
        ? "make not important"
        : "make important"
    return (
        <div>
            <ul>
                <li>{note.content} <button onClick={toggleNoteImportance(note.id)}>{lable}</button><button onClick={removeNote(note.id)}>Delete</button></li>
            </ul>
        </div>
    )
}

export default Note;