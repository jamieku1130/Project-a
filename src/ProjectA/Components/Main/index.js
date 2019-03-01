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
import Back from "../Back";
import "../../../App.css";
import helpFunction from "../../quizsData/helperFunction";

class Main extends Component {
  scroll = Scroll.animateScroll;
  state = {
    visible: false,
    title: ""
  };

  dismissHandler = event => {
    this.indexButtonHanlder();
    // event.stopPropagation();
  };
  componentDidMount = () => {
    const { id, ocaProgress, ocpProgress } = this.props;
    const quizs = helpFunction(id); //this.props.id is from router path="/main:id"
    let answerState;
    if (id < 10) {
      answerState = ocaProgress[id - 1].answerState;
      this.setState({
        title: ocaProgress[id - 1].title
      });
    } else {
      answerState = ocpProgress[id - 11].answerState;
      this.setState({
        title: ocpProgress[id - 11].title
      });
    }
    this.props.getQuizs(quizs, answerState);
  };
  componentWillUnmount = () => {
    const { id, answerStatus } = this.props;
    this.props.updateAnswerState(id, answerStatus);
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
            <Back className="return-icon" />
            <h1 style={{ textAlign: "center" }}>{this.state.title}</h1>
            <p style={{ marginTop: "10px" }}>進度：{percentage.toFixed(1)}%</p>
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
