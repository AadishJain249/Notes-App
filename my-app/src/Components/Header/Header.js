import './Header.css'
const Header=(props)=>{
    return(
        <div className="header">
        <h1><span style={{color:"#308d46"}}>React</span> Notes</h1>
        <button onClick={props.onClick} className="save">ToggleColor</button>
        </div>
    )
}
export default Header