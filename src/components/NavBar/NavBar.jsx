import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <ul className="nav-bar">
            <li> <Link to="/" >Home</Link> </li>
            <li> <Link to="/login" >Login</Link> </li>
            <li> <Link to="/authors" >Authors</Link> </li>
        </ul>
    )
}

export default NavBar