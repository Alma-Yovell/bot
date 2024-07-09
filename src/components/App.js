// import './App.css';
import React, { useState } from 'react';
import Header from './Header.js'
import Menu from './Menu.js';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="App">

      <Header onMenuClick={() => setMenuOpen(true)} />
      {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}

    </div>
  );
}

export default App;
