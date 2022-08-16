import { useState } from "react"
const AddNote=(props)=>{
    const[text,addText]=useState('')
    const Limit=300
    const submitHandler=(event)=>{
        if(Limit-event.target.value.length>0)
        {
            event.preventDefault()
            addText(event.target.value)
        }
    }
    const saveHandler=(event)=>{
        if(text.trim().length>0)
        {
            props.addHandler(text)
            console.log(text);
            addText('')
        } // to make it initial value
    }
    return(
        <div className="note new">
       <textarea cols="10" rows="8" placeholder="Type to add a note..."
          value={text}  onChange={submitHandler}></textarea>

        <div className="note-footer">
            <small>{Limit-text.length}Remaining</small>
            <button className="save" onClick={saveHandler}>Save</button>
        </div>
        </div>
    )
}
export default AddNote