import React from "react";

const Company = ({ myData }) => {
  const companyList = myData.map((data) =>
    data.companies.map(({ name, location }) => (
      <>
        <li>
          <h6 className="company-name">{name}</h6>
          <h6 className="company-location">{location}</h6>
        </li>
      </>
    ))
  );
  return (
    <div>
      <h2 className="company-worked">Company Worked</h2>
      <ul className="company-list">{companyList}</ul>
    </div>
  );
};

export default Company;
