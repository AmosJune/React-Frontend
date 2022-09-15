import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <ul className="nav-bar">
            <h1>IQuote Hub</h1>
            <li> <img src='https://media.istockphoto.com/vectors/vector-flat-cute-brown-owl-sitting-on-branch-isolated-on-white-vector-id907874662?k=20&m=907874662&s=612x612&w=0&h=xMiE6FnAGChcsj7DPLFwnjv44qFrW-7ESU7e8ts74J0='/></li>
            <li> <Link to="/" >Home</Link> </li>
            <li> <Link to="/authors" >Authors</Link> </li>
            <li> <Link to="/login" >Login</Link> </li>
        </ul>
    )
}

export default NavBar