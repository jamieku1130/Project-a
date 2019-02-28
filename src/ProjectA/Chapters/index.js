import React, { Component } from "react";
import connect from "./connect";
import ChapterList from "./Components/ChapterList";
import study from "../../study.svg";
import Back from "../Components/Back";
import Header from "../Components/Header";

class Chapters extends Component {
  componentDidMount = () => {
    this.props.updateCertification(this.props.cert);
  };

  render() {
    return (
      <div className="chapters">
        <Header />
        <div className="chapter-main-section">
          <Back className="return-icon" />
          <div className="cate-imagebox">
            <img src={study} alt="study" />
          </div>
          <section className="chapter-section">
            <ChapterList />
          </section>
        </div>
      </div>
    );
  }
}

export default connect(Chapters);
