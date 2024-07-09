import React from 'react';
import '../componentsStyle/Menu.css'

function Menu({ onClose, onNavigate }) {

    const handleItemClick = (component) => {
        onNavigate(component);
        onClose(); // Close the menu after navigating
    };

    return (

        <div className="menu">

            <img src={process.env.PUBLIC_URL + '/whiteLogo.svg'} alt="whiteLogo" className="whiteLogo" />
            <h1 className="menu-title">
                תפריט
            </h1>
            <img src={process.env.PUBLIC_URL + '/closeBtn.png'} alt="CloseBtn" className="closeBtn" onClick={onClose} />
            <ul className="menu-list">
                <li onClick={() => handleItemClick('HomePage')}> עמוד הבית </li>
                <li onClick={() => handleItemClick('Page1')}> עמוד 1 </li>
                <li onClick={() => handleItemClick('Page2')}> עמוד 2 </li>
                <li > עמוד 3 </li>

            </ul>
        </div>

    )
}


export default Menu;