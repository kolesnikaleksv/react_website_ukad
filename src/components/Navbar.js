import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../images/UKAD_logo.png';
import './Navbar.css';


function Navbar() {

    return (
        <>
            <nav className="navbar" background="#022B32" height="78">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <ul>
                        <li><NavLink exact activeClassName="active" to='/home' >Home</NavLink></li>
                        <li><NavLink activeClassName="active" to='/products'>Products</NavLink></li>
                    </ul> 
                </div>

            </nav>
        </>
    )
}


export default Navbar;