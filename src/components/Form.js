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
  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="htmlForm-control"
          rows="5"
          onChange={handleOnChange}
          value={text}
        />
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to upper case
      </button>
    </div>
  );
}

Form.prototype = { heading: PropTypes.string.isRequired };

Form.defaultProps = {
  heading: "Insert heading",
};
