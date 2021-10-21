import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/UKAD_logo.png';
import './Navbar.css';


function Navbar() {
const [click, setClick] = useState(false);

    return (
        <>
            <nav className="navbar" background="#022B32" height="78">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="Logo" />
                    </Link>
                    {/* <div className={click ? 'nav-menu active' : 'nav-menu'}>
                        <div className='nav-item'>
                            <Link to='/' className='nav-links' >
                            Home
                            </Link>
                        </div>
                        <div className='nav-item'>
                            <Link to='/' className='nav-links' >
                            Products
                            </Link>
                        </div>
                    </div> */}
                    <div className='nav-item'>
                        <Link to='/' className='nav-links active' >
                        Home
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link to='/' className='nav-links' >
                        Products
                        </Link>
                    </div>
                </div>

            </nav>
        </>
    )
}


export default Navbar;