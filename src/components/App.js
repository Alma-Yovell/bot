import React, { useState } from 'react';
import '../componentsStyle/App.css';
import Header from './Header.js'
import Menu from './Menu.js';
import HomePage from './HomePage.js';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';


function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('HomePage');

  const handleNavigate = (component) => {
    setActiveComponent(component);
    setMenuOpen(false); 
  }

  return (
    <div className="App">

      <Header onMenuClick={() => setMenuOpen(true)} />

      {menuOpen && <Menu onClose={() => setMenuOpen(false)}  onNavigate={handleNavigate} />}

      {activeComponent === 'HomePage' && <HomePage onNavigate={handleNavigate} />}
      {activeComponent === 'Page1' && <Page1 />}
      {activeComponent === 'Page2' && <Page2 />}
      {activeComponent === 'Page3' && <Page3 />}

      <img src={process.env.PUBLIC_URL + '/blueTriangle.png'} alt="blueT" className="blue-triangle" />

    </div>
  );
}

export default App;
