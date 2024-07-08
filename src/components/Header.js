import React from 'react';
import '../componentsStyle/Header.css';

function Header() {
    return (
      <header className="header">

        <img 
          src={process.env.PUBLIC_URL + '/collegeLogoText.png'}
          className="collegeLogoText"
          alt="logo"
        //   onClick={() => window.location.reload()} // Redirects to home page
        />

        <img
          src={process.env.PUBLIC_URL + '/navbar.png'}
          className="navbar"
          alt="navbar"
        //   onClick={onMenuClick}
        />

        <img
          src={process.env.PUBLIC_URL + '/orangeTriangle.png'}
          alt="Decorative"
          className="orangeTriangle"
        />
       
       
      </header>
    )
}


export default Header;
