import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <h1>Pokedex</h1>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Search</a></li>
                <li><a href='#'>About</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;