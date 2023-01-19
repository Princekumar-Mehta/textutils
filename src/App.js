import "./App.css";
import Navbar from "./components/Navbar";
//import Form from "./components/Form";
import About from "./components/About";
function App() {
  return (
    <>
      <Navbar title="Navbar" aboutText="About Textutils"></Navbar>
      <div className="container mb-8">
        {/*<Form heading="Enter text here"></Form>*/}
        <About></About>
      </div>
    </>
  );
}

export default App;
