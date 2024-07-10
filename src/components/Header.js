// import React, { useState } from 'react';
import React from 'react';
import '../componentsStyle/Header.css';

function Header({ onMenuClick }) {

    // const [isActive, setIsActive] = useState(false);

    // const toggleMenu = () => {
    //     setIsActive(!isActive); 
    // };

    return (
        <header className="header">

            <img
                src={process.env.PUBLIC_URL + '/collegeLogoText.png'}
                className="collegeLogoText"
                alt="logo"
                onClick={() => window.location.reload()} 
            />

            <img
                src={process.env.PUBLIC_URL + '/navbar.png'}
                className="navbar"
                alt="navbar"
                onClick={onMenuClick}
            />

            {/* <div className={`hamburger ${isActive ? 'is-active' : ''}`} id="hamburger" onClick={() => { toggleMenu(); onMenuClick(); }}>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
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
