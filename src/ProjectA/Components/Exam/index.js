import React, { Component } from "react";
import { Line } from "rc-progress";
import styled from "styled-components";
import connect from "./connect";
import QuestionCard from "../QuestionCard";
import ExamAnswerCard from "../ExamAnswerCard";
import Header from "../Header";
import "../../../App.css";
import helpFunction from "../../quizsData/helperFunction";
import Timer from "../CountDownTimer";
import Back from "../Back";

const SubmitButton = styled.div`
  width: 360px;
  margin: 20px auto;
  button {
    display: block;
    width: 100%;
    height: 60px;
    font-size: 20px;
    font-weight: 700;
    border: 1px solid #0084da;
    background-color: transparent;
    color: #0084da;
    border-radius: 20px;
    transition: all 0.5s ease-in-out;
  }
  button:hover {
    border: 1px solid transparent;
    background-color: #0084da;
    color: white;
  }
`;

class Exam extends Component {
  componentDidMount = () => {
    const { id } = this.props;
    const quizs = helpFunction(id); //this.props.id is from router path="/main:id"
    this.props.getQuizs(quizs);
  };
  componentWillUnmount = () => {
    this.props.resetState();
  };

  submitAnswerHandler = id => {
    this.props.submitAnswer(id);
  };

  render() {
    const { quizs, index, percentage } = this.props;
    const qObj = quizs[index];
    return qObj ? (
      <div className="App">
        <Header />
        <div className="App-main-container">
          <div className="main-section">
            <div className="status-bar">
              <Back className="back-icon" />
              <div className="timer-comp">
                <Timer />{" "}
              </div>
            </div>
            <h1 style={{ textAlign: "center" }}>
              {this.props.id === "OCA" ? "OCA" : "OCP"}
            </h1>
            <p style={{ marginTop: "10px" }}>進度：{percentage.toFixed(1)}%</p>
            <Line strokeWidth="4" percent={percentage} />
            <QuestionCard
              title={qObj.title}
              id={qObj.id}
              code={qObj.code}
              imageUrl={qObj.imageUrl}
            />
            <div className="prompt-textbox">
              {qObj.answersIntArray.length === 1 ? (
                <h2>單選題</h2>
              ) : (
                <h2>{`複選題 可選 ${qObj.answersIntArray.length}`} 題</h2>
              )}
            </div>

            <div className="answers">
              <ul>
                {qObj.answerArray.map((answerObj, i) => (
                  <ExamAnswerCard
                    key={answerObj.answer}
                    answerIndex={i}
                    answerObj={answerObj}
                    id={qObj.id}
                  />
                ))}
              </ul>
            </div>
            <SubmitButton>
              <button onClick={() => this.submitAnswerHandler(qObj.id)}>
                SUBMIT ANSWER
              </button>
            </SubmitButton>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default connect(Exam);
