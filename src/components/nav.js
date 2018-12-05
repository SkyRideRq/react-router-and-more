import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Logo-place</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>  
            </div>
        </nav>
    )
}
export default Nav