import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <section className='footer'>
            <div>
                <h2>Links</h2>
                <NavLink to="/home" >Learn More</NavLink>
                <NavLink to="/" >Back to Top</NavLink>
            </div>  

            <div>
                <h2>Contacts</h2>
                <ul>
                    <li>Phone: +254745459667</li>
                    <li>Email: iquotes@iquote.org</li>
                </ul>
            </div>          
        </section>

    )
}

export default Footer