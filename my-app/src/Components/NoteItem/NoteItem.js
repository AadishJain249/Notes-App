const NoteItem=(props)=>{
    const DeleteForever=()=>{
        props.onDelete(props.id)
    }
    return(
        <div className="note">
            {props.children}
            <button onClick={DeleteForever} className="delete-icon">Delete</button>
            </div>
    )
}
export default NoteItem