import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.jpg"
import { UserContext } from '../App'
function Navbar() {
  const {state , dispatch} = useContext(UserContext);

  const RenderMenu=()=>{
    if(state){
      return(
        <>
<li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/employee">Employee</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout">Logout</NavLink>
      </li>
        </>)
    }else{
      return(
        <>
<li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Registration</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/employee">Employee</NavLink>
      </li>
      
        </>
      )
    }
  }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src={logo} width="100" height="100" className="d-inline-block align-top" alt="logo"/>
  <NavLink className="navbar-brand" to="#">CSIR National Physical Laboratory</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">

     <RenderMenu/> 
     
    </ul>
   
  </div>
</nav>
        </>
    )
}

export default Navbar
