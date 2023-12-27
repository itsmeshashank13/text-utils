import React, { useState } from 'react';
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [customColor, setCustomColor] = useState('light');

  const showAlert = (message, type)=> {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 1200);
  }


  // const toggleMode = ()=> {
  //   if (mode === "light"){
  //     setMode('dark');
  //     document.body.style.backgroundColor = "rgb(22 21 43)";
  //     showAlert("dark mode enabled");
  //   } else {
  //     setMode('light');
  //     document.body.style.backgroundColor = "white";
  //     showAlert("light mode enabled");
  //   }
  // };

  const toggleMode = (newColor)=> {
    setMode(newColor === 'light' ? 'light' : 'dark');
    document.body.style.backgroundColor = newColor;
    if (newColor === 'light') {
      showAlert("light mode enabled");
    } else {
      showAlert("Dark mode enabled");
    }
  };


  const handleColorChange = (newColor)=> {
    setCustomColor(newColor);
  };


  return (
    <>
      <Navbar title="Text Utility Tool" mode={mode} toggleMode={toggleMode} handleColorChange={handleColorChange}/>
      <Alert alert={alert} />
      <div className="container my-3" style={{ backgroundColor: customColor, color: "white"}}>
        <Textform heading="Enter Text Below" showAlert={showAlert} mode={mode} customColor={customColor}/>
        {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
