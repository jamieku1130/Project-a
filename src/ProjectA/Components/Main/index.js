import React, { Component } from "react";
import Scroll from "react-scroll";
import { Line } from "rc-progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleLeft,
  faStar,
  faListAlt
} from "@fortawesome/free-solid-svg-icons";
import connect from "./connect";
import QuestionCard from "../QuestionCard";
import AnalysisCard from "../AnalysisCard";
import AnswerCard from "../AnswerCard";
import List from "../List";
import Header from "../Header";
import "../../../App.css";
import helpFunction from "../../quizsData/helperFunction";

class Main extends Component {
  scroll = Scroll.animateScroll;
  state = {
    visible: false
  };

  dismissHandler = event => {
    this.indexButtonHanlder();
    // event.stopPropagation();
  };
  componentDidMount = () => {
    // console.log(quizs);
    //const quizs = require("../../quizsData/oca/ch2/oca-ch2-quizData").default;
    const quizs = helpFunction(this.props.id);
    this.props.getQuizs(quizs);
  };
  componentWillUnmount = () => {
    this.props.resetState();
  };

  markButtonHandler = id => {
    this.props.markQuiz(id);
  };

  nextButtonHandler = () => {
    this.props.nextQuiz();
    this.scroll.scrollToTop();
  };

  backButtonHandler = () => {
    this.props.backQuiz();
  };

  indexButtonHanlder = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const { quizs, index, answerStatus, total, percentage } = this.props;
    const qObj = quizs[index];
    return qObj ? (
      <div className="App">
        <List
          visible={this.state.visible}
          dismissHandler={this.dismissHandler}
        />
        <Header />

        <div className="App-main-container">
          <div className="main-section">
            <div className="return-icon">
              <button
                onClick={() => {
                  window.history.back();
                }}
              >
                Back
              </button>
            </div>
            <p style={{ marginTop: "60px" }}>進度：{percentage}%</p>
            <Line strokeWidth="4" percent={percentage} />
            <QuestionCard
              title={qObj.title}
              id={qObj.id}
              code={qObj.code}
              imageUrl={qObj.imageUrl}
            />

            <div className="answers">
              <ul>
                {qObj.answerArray.map((answerObj, i) => (
                  <AnswerCard
                    key={answerObj.answer}
                    answerIndex={i}
                    answerObj={answerObj}
                    id={qObj.id}
                    answered={answerStatus[index].isAnswered}
                    answer={answerStatus[index].answer}
                  />
                ))}
              </ul>
            </div>
            <div className="progress-control">
              <div>
                <button
                  onClick={() => this.markButtonHandler(qObj.id)}
                  style={
                    answerStatus[qObj.id].isMarked ? { color: "orange" } : null
                  }
                >
                  <FontAwesomeIcon icon={faStar} size="lg" />
                </button>
              </div>
              <div>
                <button
                  onClick={this.backButtonHandler}
                  disabled={qObj.id === 0}
                >
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                </button>
              </div>
              <div>
                <button
                  onClick={this.nextButtonHandler}
                  disabled={index === total - 1}
                >
                  <FontAwesomeIcon icon={faArrowCircleRight} size="lg" />
                </button>
              </div>
              <div>
                <button onClick={this.indexButtonHanlder}>
                  <FontAwesomeIcon icon={faListAlt} size="lg" />
                </button>
              </div>
            </div>
            {answerStatus[qObj.id].isAnswered ? (
              <AnalysisCard explain={qObj.explain} />
            ) : null}
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default connect(Main);
