import NoteItem from "../NoteItem/NoteItem"
import AddNote from "../AddNote/AddNote"

const NoteList=(props)=>{
    
    return(
        <div className="notes-list">
           {props.notes.map((note)=>
             
                <NoteItem
                    id={note.id}
                    key={note.id}
                    text={note.text}
                    date={note.date}
                    onDelete={props.onDelete}
                >
                      {note.text}
                    <div className="note-footer">
                    <small>{note.date}</small>
                    </div>
                    </NoteItem>
             )}
             <AddNote addHandler={props.addHandler}></AddNote>
           
        </div>
    )
}
export default NoteList