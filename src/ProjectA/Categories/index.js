import React from "react";
import { Link } from "@reach/router";
import logo from "../../java-awesome.svg";

const Categories = ({ process }) => {
  return (
    <div className="categories">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <div className="categories-main-section">
        <div className="return-icon">
          <button
            onClick={() => {
              window.history.back();
            }}
          >
            Back
          </button>
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
          {process === "EXAM" ? (
            <div className="textbox-exam">
              <p>考試時間 150 分鐘, 總共 80 題</p>
              <p>Are you ready ...</p>
            </div>
          ) : null}
        </div>
        <div className="categoreis-background">
          <div className="navigation">
            <ul className="navigation__list">
              <li className="navigation__item">
                {process !== "EXAM" ? (
                  <Link to="/chapters/OCA" className="navigation__link">
                    OCA-808
                  </Link>
                ) : (
                  <Link to="/exam/OCA" className="navigation__link">
                    OCA-808
                  </Link>
                )}
              </li>
              <li className="navigation__item">
                {process !== "EXAM" ? (
                  <Link to="/chapters/OCP" className="navigation__link">
                    OCP-809
                  </Link>
                ) : (
                  <Link to="/exam/OCP" className="navigation__link">
                    OCP-809
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
