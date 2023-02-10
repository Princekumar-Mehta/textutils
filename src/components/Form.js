import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Form(props) {

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper case", "success");
  };
  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower case", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h3 className = "mb-3">{props.heading}</h3>
        <div className="my-3">
          <textarea
            className="htmlForm-control"
            rows="5"
            style={{width:"100%"}}
            id="myBox"
            onChange={handleOnChange}
            value={text}
          />
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to lower case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0;}).length} words, {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0;}).length} Minutes required to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}

Form.prototype = { heading: PropTypes.string.isRequired };

Form.defaultProps = {
  heading: "Insert heading",
};
