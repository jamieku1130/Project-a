import React from "react";
// import { Link } from "@reach/router";
import logo from "../../java-awesome.svg";
import javacafe from "../../java-cafe.svg";

const Landing = () => {
  return (
    <div className="landing">
      <header className="landing-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="hero">
        <div className="hero-logo-container">
          <img
            src={javacafe}
            className="Hero-logo"
            alt="logo for java cafe hero section"
          />
        </div>
        <div className="hero-text-box">
          <h1>Java Cafe</h1>
          <p>
            Taming Java OCA/OCP, the path to the succeed for Java programming
          </p>
        </div>
      </div>

      <section className="button-section">
        <h2>Take an Adventure?</h2>
        <p>
          你可以選擇REVIEW覆習各個章節,當你準備好可以直接按EXAM. Good Luck...
        </p>
        <button className="landing-button">REVIEW</button>
        <button className="landing-button">EXAM</button>
      </section>
    </div>
  );
};

export default Landing;
