import "./App.css";
import Navbar from "./components/Navbar";
//import Form from "./components/Form";
import { useState } from "react";
import About from "./components/About";
function App() {
  const [theme, setTheme] = useState("dark");
  const toggle = function () {
    if (theme === "dark") {
      setTheme("light");
    } else setTheme("dark");
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
        <div className="container mb-8">
          {/*<Form heading="Enter text here"></Form>*/}
          <About theme={theme} toggle={toggle}></About>
        </div>
      </div>
    </>
  );
}

export default App;
