import React from "react";
import { Link } from "@reach/router";
import logo from "../../java-awesome.svg";
import returnButton from "../../Retun-arrow.svg";

const Categories = () => {
  return (
    <div className="categories">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="return-icon">
        <img src={returnButton} alt="return button" />
      </div>
      <div className="categories-textbox">
        <div className="textbox">
          <h2>OCA</h2>
          <p>Oracle Certified Associate for Java Programming</p>
        </div>
        <div className="textbox">
          <h2>OCP</h2>
          <p>Oracle Certified Professional for Java Programming</p>
        </div>
      </div>
      <div className="categoreis-background">
        <div className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to="/chapters" className="navigation__link">
                OCA-808
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/chapters" className="navigation__link">
                OCA-809
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
