import React, { Component } from "react";
import { Line } from "rc-progress";
import { navigate } from "@reach/router";
import styled from "styled-components";
import connect from "./connect";
import QuestionCard from "../QuestionCard";
import ExamAnswerCard from "../ExamAnswerCard";
import Header from "../Header";
import Timer from "../CountDownTimer";
import Back from "../Back";
import Modal from "../Modal";
import helpFunction from "../../quizsData/helperFunction";
import "../../../App.css";

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
  state = {
    elapsed: 9000,
    pauseModal: false,
    backModal: false
  };

  tick = () => {
    this.timerId = setInterval(() => {
      this.setState({
        elapsed: this.state.elapsed - 1
      });
    }, 1000);
  };

  stopTick = () => {
    clearInterval(this.timerId);
  };

  componentDidMount = () => {
    const { id } = this.props;
    const quizs = helpFunction(id); //this.props.id is from router path="/main:id"
    this.props.getQuizs(quizs);
    this.tick();
  };
  componentWillUnmount = () => {
    this.stopTick();
  };

  submitAnswerHandler = id => {
    this.props.submitAnswer(id);
    if (this.props.index === this.props.total - 1) {
      navigate(`/result`, { state: { elapsed: this.state.elapsed } });
    }
  };

  onToggleTimer = () => {
    this.setState({
      pauseModal: !this.state.pauseModal
    });
    this.stopTick();
  };

  onToggleTimerOn = () => {
    this.setState({
      pauseModal: !this.state.pauseModal
    });
    this.tick();
  };

  toggleBack = () => {
    this.setState({
      backModal: !this.state.backModal
    });
  };

  render() {
    const { quizs, index, percentage } = this.props;
    const qObj = quizs[index];
    const { pauseModal, backModal, elapsed } = this.state;
    const blur = {
      backgroundColor: "white",
      top: 0,
      left: 0,
      position: "absolute",
      width: "100%",
      height: "100vh",
      filter: "blur(5px)"
    };
    return qObj ? (
      <div className="App" style={pauseModal || backModal ? blur : null}>
        <Header />
        <div className="App-main-container">
          <div className="main-section">
            <div className="status-bar">
              <Back className="back-icon" thunk={this.toggleBack} />
              <Timer onToggleTimer={this.onToggleTimer} elapsed={elapsed} />
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
              ol={qObj.ol}
            />
            <div className="prompt-textbox">
              {qObj.answersIntArray.length === 1 ? (
                <h2>單選題</h2>
              ) : (
                <h2>{`複選題 可選 ${qObj.answersIntArray.length}`} 個答案</h2>
              )}
            </div>

            <div className="answers">
              <ul>
                {qObj.answerArray.map((answerObj, i) => (
                  <ExamAnswerCard
                    key={answerObj.answer + i}
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
            {this.state.pauseModal ? (
              <Modal>
                <h1>注意,正規考試並沒有暫停時間的功能</h1>
                <div className="timer-resume">
                  <button onClick={this.onToggleTimerOn}>RESUME</button>
                </div>
              </Modal>
            ) : null}
            {this.state.backModal ? (
              <Modal>
                <h1>現在按 BACK 考試進度將會遺失!!</h1>
                <div className="back-resume">
                  <button onClick={this.toggleBack}>繼續考試</button>
                  <button
                    onClick={() => {
                      window.history.back();
                      this.props.resetState();
                    }}
                  >
                    離開,下次再來
                  </button>
                </div>
              </Modal>
            ) : null}
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default connect(Exam);
