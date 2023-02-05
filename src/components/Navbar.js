import React from "react";
import PropTypes from "prop-types";
import {
   Link
} from "react-router-dom";
export default function Navbar(props) {
  
  return (
    <div style={{color:`${props.theme==="dark"?"white":"black"}`}}>
      <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                 <span className={`text-${props.theme==="dark"?"white":"black"}`}>Home</span> 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={props.toggle}
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
               Theme: {props.theme}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototype = { title: PropTypes.string.isRequired };
Navbar.prototype = { aboutText: PropTypes.string };

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About Text here",
};
