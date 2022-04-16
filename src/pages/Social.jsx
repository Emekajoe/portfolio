import React from "react";

const Social = ({ myData }) => {
  const socials = myData.map((data) =>
    data.socials.map((social) => (
      <>
        <li>
          <a href={social.link}>
            <img src={social.img} className="social-item" />
          </a>
        </li>
      </>
    ))
  );

  return <ul className="social-list">{socials}</ul>;
};

export default Social;
