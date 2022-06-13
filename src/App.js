import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light') 
  const[alert, setAlert]= useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light Mode enabled', 'success')
    }else{
      setMode('dark')
      document.body.style.backgroundColor='rgb(56, 57, 64)'
      showAlert('Dark Mode enabled', 'success')
    }
  }

  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} title='TextUtils' link1='Home' link2='About'/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About />}>
            
          </Route>
          <Route path="/" element={<TextForm alert={showAlert} mode={mode} heading='Enter the text to analyze'/>}>
          
          </Route>
        </Routes>
      
      </div>
      </Router>
      </>
  )
}

export default App;
