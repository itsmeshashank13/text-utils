import React, { useState } from 'react';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = ()=> {
    if (mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = "rgb(22 21 43)"
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white"
    }
  };

  return (
    <>
      <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textform heading="Enter Text Below" mode={mode}/>
        {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
