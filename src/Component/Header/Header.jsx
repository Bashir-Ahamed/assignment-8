import React from "react";
import "./Header.css";
import logo from "../../assets/pngegg.png";

const Header = () => {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">AiUniverse</a>
        <img src={logo} alt="" />
      </div>
    </nav>
  );
};

export default Header;
