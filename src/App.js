// import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.js'
import Menu from './components/Menu.js';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }


  return (
    <div className="App">

      <Header onMenuClick={handleMenuClick} />

      {menuOpen ? (
        <Menu onClose={() => setMenuOpen(false)}/>
      ) : (
        <div>
          
        </div>
      )}

    </div>
  );
}

export default App;
