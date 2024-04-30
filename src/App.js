import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#22223b'
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'TextUtils-DarkMode'
      // setInterval(() =>{
      //   document.title="download app"
      // },2000);
      // setInterval(() =>{
      //   document.title="install now"
      // },1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success")
      // document.title = 'TextUtils-lightMode'

    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" aboutText="AboutUs " mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}></TextForm>


{/* 
          <Switch>
            <Route exact path="/about">
              <About mode={mode}></About>
            </Route>
            <Route exact path="/"><TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}></TextForm>
            </Route>
          </Switch> */}
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;
