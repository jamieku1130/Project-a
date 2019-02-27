import React, { Component } from "react";
import { Line } from "rc-progress";
import connect from "./connect";
import QuestionCard from "../QuestionCard";
import ExamAnswerCard from "../ExamAnswerCard";
import Header from "../Header";
import "../../../App.css";
import helpFunction from "../../quizsData/helperFunction";
import Timer from "../CountDownTimer";

class Exam extends Component {
  componentDidMount = () => {
    const { id } = this.props;
    const quizs = helpFunction(id); //this.props.id is from router path="/main:id"
    this.props.getQuizs(quizs);
  };
  componentWillUnmount = () => {
    this.props.resetState();
  };

  submitToNextButtonHandler = () => {
    this.props.nextQuiz();
  };

  render() {
    const { quizs, index, answerStatus, percentage } = this.props;
    const qObj = quizs[index];
    return qObj ? (
      <div className="App">
        <Header />
        <div className="App-main-container">
          <div className="main-section">
            <div className="status-bar">
              <div className="back-icon ">
                <button
                  onClick={() => {
                    window.history.back();
                  }}
                >
                  Back
                </button>
              </div>
              <div className="timer-comp">
                <Timer />
              </div>
            </div>

            <h1 style={{ textAlign: "center" }}>
              {this.props.id === "OCA" ? "OCA" : "OCP"}
            </h1>

            <p style={{ marginTop: "10px" }}>進度：{percentage}%</p>
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
                  <ExamAnswerCard
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
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default connect(Exam);
