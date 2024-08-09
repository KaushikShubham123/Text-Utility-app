// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0a076a';
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div className='vh-100'>
      <Navbar mode={mode} toggleMode={toggleMode} />

      <div className="container my-3" >

        <TextForm mode={mode} heading='Enter the text to analyse below' /></div>
    </div>

  );

}

export default App;
