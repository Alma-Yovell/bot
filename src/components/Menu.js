import React from 'react';
import '../componentsStyle/Menu.css'

function Menu({onClose}) {
    return (

        <div className="menu">

            <img src={process.env.PUBLIC_URL + '/whiteLogo.svg'} alt="Decorative" className="whiteLogo"  />
            <h1 className="menu-title">
                תפריט
            </h1>
            <img src={process.env.PUBLIC_URL + '/closeBtn.png'} alt="Close" className="closeBtn" onClick={onClose}/>
            <ul className="menu-list">
                <li > עמוד 1 </li>
                <li > עמוד 2 </li>
                <li > עמוד 3 </li>
      
            </ul>
        </div>

    )
}


export default Menu;