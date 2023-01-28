import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Form from "./components/Form";
import { useState } from "react";
import About from "./components/About";
function App() {
  const [theme, setTheme] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = function(message,type){
     setAlert({
      msg:message,
      type:type
     });
     setTimeout(() => {
      setAlert(null);
     }, 1000);
  }
  const toggle = function () {
    if (theme === "dark") {
      setTheme("light");
      showAlert("Light Theme Enabled","success");
    } else {
      setTheme("dark");
      showAlert("Dark Theme Enabled","success");
    }
  };
  return (
    <>
      <div className={`bg-${theme==="dark"?"white":"black"}`}>
        <Navbar
          title="Navbar"
          aboutText="About Textutils"
          theme={theme}
          toggle={toggle}
        ></Navbar>
        <Alert alert={alert}/>
        <div className="container mb-8">
          <Form showAlert={showAlert} heading="Enter text here"></Form>
          <About theme={theme} toggle={toggle}></About>
        </div>
      </div>
    </>
  );
}

export default App;
