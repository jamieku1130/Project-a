import React from "react";
import { Link } from "@reach/router";
import Back from "../Components/Back";
import Header from "../Components/Header";

const Categories = ({ process }) => {
  return (
    <div className="categories">
      <Header />
      <div className="categories-main-section">
        <Back className="return-icon" />
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
              <p>考試時間 150 分鐘, </p>
              <p>OCA 80 題, OCP 85題</p>
              <h6>考完後會有成績和題解頁面</h6>
              <h6>Are you ready ?</h6>
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
