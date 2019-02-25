import React from "react";
import { Link } from "@reach/router";
import logo from "../../../java-awesome.svg";

const Header = () => (
  <header className="App-header">
    <Link to="/">
      <img src={logo} className="App-logo" alt="logo" />
    </Link>
  </header>
);

export default Header;
