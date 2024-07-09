import React from 'react';
import '../componentsStyle/HomePage.css'

function HomePage({ onNavigate }) {
    return (
        <div className="HomePage">

                <div className="title">
                    כותרת הלומדה
                </div>

                <div className="subtitle">
                    כותרת משנית כותרת משנית כותרת משנית כותרת משנית כותרת משנית כותרת משנית כותרת משנית כותרת משניתמכרמרטחמצכאציטא
                </div>

                <div className='pages-list'>

                    <div className="pages-list-item" >
                        <div className="pages-list-content">
                            <div className="pages-list-title-homepage" onClick={() => onNavigate('Page1')}> עמוד 1</div>
                        </div>
                    </div>

                    <div className="pages-list-item" >
                        <div className="pages-list-content">
                            <div className="pages-list-title-homepage" onClick={() => onNavigate('Page2')}> עמוד 2</div>
                        </div>
                    </div>

                    <div className="pages-list-item" >
                        <div className="pages-list-content">
                            <div className="pages-list-title-homepage"> עמוד 3</div>
                        </div>
                    </div>


                </div>

                <div className="subtitle">
                    מכטגמחיטקגמחגעטמחצגמחצגרצמחרצמעזר זה נבנה בשיתוף פעולה בין .... ומגמת אימוני רשויות במכללה הלאומית לאיתנות ישראלית
                </div>

            </div>
    )
}


export default HomePage;