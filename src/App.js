import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Form from "./components/Form";
import { useState } from "react";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = function (message, type) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const removeClass = ()=>{
document.body.classList.remove("bg-dark");
document.body.classList.remove("bg-white");
document.body.classList.remove("bg-danger");
document.body.classList.remove("bg-success");
  }
  const toggle = function (cls) {
    removeClass();
    console.log(cls);
    document.body.classList.add("bg-"+cls);
    if (theme === "dark") {
      setTheme("light");
     // document.title = "TextUtils Light Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
      showAlert("Light Theme Enabled", "success");
    } else {
      setTheme("dark");
     // document.title = "TextUtils Dark Mode";
      showAlert("Dark Theme Enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <div >
          <Navbar
            title="Navbar"
            aboutText="About Textutils"
            theme={theme}
            toggle={toggle}
          ></Navbar>
          <Alert alert={alert} />
          <div className="container mb-8">
            <Routes>
              <Route exact path="/about" element={<About theme={theme} toggle={toggle} />}/>
              <Route exact path="/" element = {<Form showAlert={showAlert} heading="Try TextUtils Word Counter - Lower Case To Upper Case - Upper Case To Lower Case" />}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;