import './App.css';
import {nanoid} from 'nanoid'
import {useState} from 'react'
import Header from './Components/Header/Header';
// import NoteList from './Components/NoteList/NoteList'\
import NoteList from './Components/NoteList/NoteList';
function App() {
  // this will store my new notes
const [toggle,setToggle]=useState(false)
const [add,addText]=useState(  
  [
    
    {
      id:nanoid(),
      text:"1st-Note",
      date:"12/8/2022"
    },
    {
      id:nanoid(),
      text:"2nd-Note",
      date:"12/8/2022"
    },
    {
      id:nanoid(),
      text:"3rd-Note",
      date:"12/8/2022"
    }
    
  ]

)
  const textAdd=(text)=>{
  // console.log("fsdfsdfs");  
  const date = new Date();
  const newNote = {
    id:nanoid(),
    text :text,
    date : date.toLocaleDateString()
  }
  console.log(add);
  const update=[...add,newNote]
  console.log(update);
  addText(update)
  }

  const textDelete=(id)=>{
    const update=add.filter((note)=>note.id!==id)
    addText(update)
  }
  const change=()=>{
    setToggle((prev)=>!prev)
    console.log(setToggle);
  }
    return (
      <div className={`${toggle && 'dark-mode'} `}>
        <div className='container'>
        <Header onClick={change}></Header>
        <NoteList notes ={add.filter((note)=>note.text)} addHandler={textAdd} onDelete={textDelete}/> 
        </div>
      </div>
  );
}

export default App;
