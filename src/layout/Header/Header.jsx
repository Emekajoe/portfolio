import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import { Utility } from "./utility/utility";

export const Header = ({ toggle, handleToggle }) => {
  return (
    <nav className="nav">
      <Utility toggle={toggle} handleToggle={handleToggle} />
      <ul className="nav-list">
        <span className="logo">🧑🏿‍💻</span>
        <h5 className="logo-name">PortADonis</h5>
        {toggle && (
          <div className="main-nav">
            <ul className="main-nav-item">
              <li>
                <Link to="/">Projects</Link>
              </li>
              <li>
                <Link to="/social">Social</Link>
              </li>
              <li>
                <Link to="/company">Company</Link>
              </li>
            </ul>
          </div>
        )}
      </ul>
    </nav>
  );
};
