import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img
                            src="/public/UKAD_logo.png"
                            width="110"
                            height="27.3"
                            //className="d-inline-block align-top"
                            alt="ukadLogo"
                        />
                    </Link>
                    <div className="menu-icon">

                    </div>
                </div>

            </nav>
        </>
    )
}


export default Navbar;