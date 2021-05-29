import "./topbar.scss";
//import logo from './logo.png';
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <img src="./assets/logo.png" alt=""/>
          {/* <a href="#intro" className="logo">Khushboo Singh </a>
          <p>{"\n"}Full Stack Developer</p> */}
          
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 7984504858</span> 
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>singhkhusboo.256@gmail.com</span> 
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>  
    </div>
  )
}
