import React from 'react';
import '../componentsStyle/Menu.css'

function Menu({onNavigate , onClose}) {

    return (

        <div className="menu">

            <img src={process.env.PUBLIC_URL + '/closeBtn.png'} alt="CloseBtn" className="closeBtn" onClick={onClose} />
            <img src={process.env.PUBLIC_URL + '/whiteLogo.svg'} alt="whiteLogo" className="whiteLogo" />
            <h1 className="menu-title">
                תפריט
            </h1>
            <ul className="menu-list">
                <li onClick={() => onNavigate('HomePage')}> עמוד הבית </li>
                <li onClick={() => onNavigate('Page1')}> עמוד 1 </li>
                <li onClick={() => onNavigate('Page2')}> עמוד 2 </li>
                <li onClick={() => onNavigate('Page3')}> עמוד 3 </li>

            </ul>
            
        </div>

    )
}


export default Menu;