import React from "react";
import "./utility.css";

export const Utility = (props) => {
  return (
    <div className="utility">
      <input
        type="checkbox"
        id="check"
        name="toggle"
        value={props.toggle}
        onChange={props.handleToggle}
      />
      <label htmlFor="check">
        <span className="label"></span>
      </label>
    </div>
  );
};
