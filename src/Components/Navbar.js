import React from "react";
import classes from "./Navbar.module.scss";
import logo from "../img/2560px-Valorant_logo_-_pink_color_version.svg.png";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <img src={logo} />
    </div>
  );
};

export default Navbar;
