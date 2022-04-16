import React from "react";

const Product = ({ myData }) => {
  const projectList = myData.map((data) =>
    data.project.map((project) => (
      <>
        <img className="images" src={project.img} alt="" />
        <ul className="project-list">
          <li className="project-item">
            <h4>{project.name}</h4>
          </li>
          <li className="date">
            <h5>{project.dateCreated}</h5>
          </li>
        </ul>
      </>
    ))
  );
  return (
    <div className="project">
      {" "}
      <h1 className="name">My Projects</h1>
      {projectList}
    </div>
  );
};

export default Product;
