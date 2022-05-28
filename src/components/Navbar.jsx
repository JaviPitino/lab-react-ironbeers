import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeImg from '../assets/homeicon.png'

function Navbar() {
  return (
    <div className="navbar container-fluid d-block">
     <NavLink to="/"> <img src={HomeImg} alt="home" /> </NavLink>
    </div>
  )
}

export default Navbar