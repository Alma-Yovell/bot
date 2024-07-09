import React from 'react';
import '../componentsStyle/Header.css';

function Header({ onMenuClick }) {
    return (
        <header className="header">

            <img
                src={process.env.PUBLIC_URL + '/collegeLogoText.png'}
                className="collegeLogoText"
                alt="logo"
                onClick={() => window.location.reload()} // Redirects to home page
            />

            <img
                src={process.env.PUBLIC_URL + '/navbar.png'}
                className="navbar"
                alt="navbar"
                onClick={onMenuClick}
            />

            {/* <div class="navbar" id="navbar">
                <span id="line1"></span>
                <span id="line2"></span>
                <span id="line3"></span>
            </div> */}

            <img
                src={process.env.PUBLIC_URL + '/orangeTriangle.png'}
                alt="orangeT"
                className="orangeTriangle"
            />


        </header>
    )
}


export default Header;
