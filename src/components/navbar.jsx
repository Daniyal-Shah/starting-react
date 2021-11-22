import React, { Component } from "react";

//Stateless functional components
const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className=" badge rounded-pill bg-secondary ms-2 ">
            {props.totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
