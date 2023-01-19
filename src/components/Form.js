import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Form(props) {
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowerClick = () => {
    setText(text.toLowerCase());
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="htmlForm-control"
            rows="5"
            onChange={handleOnChange}
            value={text}
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to lower case
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes required to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

Form.prototype = { heading: PropTypes.string.isRequired };

Form.defaultProps = {
  heading: "Insert heading",
};
