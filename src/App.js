import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
function App() {
  return (
    <>
      <Navbar title="Navbar" aboutText="About Textutils"></Navbar>
      <div className="container mb-8">
        <Form heading="Enter text here"></Form>
      </div>
    </>
  );
}

export default App;
