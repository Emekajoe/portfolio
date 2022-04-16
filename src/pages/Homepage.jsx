import React from "react";
import { Header } from "../layout/Header/Header";
import { Body } from "../layout/body/Body";
import { Footer } from "../layout/footer/Footer";
import Social from "./Social";
import Company from "./Company";
import Product from "./Product";
import { Route, Switch } from "react-router-dom";
import "./Homepage.css";

const data = [
  {
    project: [
      {
        name: "Party Fest",
        dateCreated: "4/5/2019",
        img: "./images/beau.png",
      },
      {
        name: "Login Page",
        dateCreated: "4/5/2020",
        img: "./images/login.jpg",
      },
      {
        name: "Important People",
        dateCreated: "4/5/2022",
        img: "./images/important.jpg",
      },
    ],

    companies: [
      {
        name: "Tesla",
        location: " USA",
      },
      {
        name: "Dangote",
        location: "Nigeria",
      },
      {
        name: "Airtel",
        location: "India",
      },
    ],

    socials: [
      {
        img: "./images/github.webp",
        link: "https://github.io",
      },
      {
        img: "/images/Facebook.webp",
        link: "https://facebook.com",
      },
      {
        img: "./images/twitter.webp",
        link: "https://twitter.com",
      },
      {
        img: "./images/instagram.webp",
        link: "https://instagram.com",
      },
    ],
  },
];

export const Homepage = () => {
  const [myData, setMyData] = React.useState(data);
  const [toggle, setToggle] = React.useState(false);
  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <div className="homepage">
      <Header toggle={toggle} handleToggle={handleToggle} />
      <Switch>
        <Route path="/company" exact>
          <Company myData={myData} />
        </Route>
        <Route path="/" exact>
          {!toggle && <Product myData={myData} />}
        </Route>
        <Route path="/social" exact>
          <Social myData={myData} />
        </Route>
      </Switch>
      <Body myData={myData} toggle={toggle} />
      <Footer />
    </div>
  );
};
