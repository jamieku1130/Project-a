import React from "react";
// import { Link } from "@reach/router";
import logo from "../../java-awesome.svg";
import ChapterList from "./Components/ChapterList";
import study from "../../study.svg";

const Chapters = () => {
  return (
    <div className="chapters">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="cate-imagebox">
        <img src={study} alt="study" />
      </div>
      <section className="chapter-section">
        <ChapterList />
      </section>
    </div>
  );
};

export default Chapters;
