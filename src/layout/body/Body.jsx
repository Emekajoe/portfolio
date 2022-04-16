import React from "react";
import Social from "../../pages/Social";
import Product from "../../pages/Product";
import Company from "../../pages/Company";
import "./Body.css";

export const Body = ({ myData, toggle }) => {
  return (
    <div className="main">
      <article className="body">
        {!toggle && <Company myData={myData} />}
        {!toggle && <Social myData={myData} />}
      </article>
    </div>
  );
};

// <Product myData={myData} />
