import React, { useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = ()=> {
    if (mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = "rgb(22 21 43)";
      showAlert("dark mode enabled");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled");
    }
  };

  return (
    <>
      <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform heading="Enter Text Below" showAlert={showAlert} mode={mode}/>
        {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
