import React from "react";
import { Link } from "@reach/router";
import logo from "../../java-awesome.svg";
import ChapterList from "./Components/ChapterList";
import study from "../../study.svg";

const Chapters = () => {
  return (
    <div className="chapters">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <div className="chapter-main-section">
        <div className="return-icon">
          <button
            onClick={() => {
              window.history.back();
            }}
          >
            Back
          </button>
        </div>
        <div className="cate-imagebox">
          <img src={study} alt="study" />
        </div>
        <section className="chapter-section">
          <ChapterList />
        </section>
      </div>
    </div>
  );
};

export default Chapters;
