import React from "react";
import Scroll from "react-scroll";
import connect from "./connect";

//const AnswerCard = ({ AnswerIndex,answerObj,id, answerQuiz }) => {

const firstLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H"];

class AnswerCard extends React.Component {
  scroll = Scroll.animateScroll;
  clickedHandler = answerIndex => {
    const { answerObj, id, answerQuiz, answered } = this.props;
    if (answered) {
      return;
    }
    answerQuiz(id, answerObj.isCorrect, answerIndex);
    this.scroll.scrollToBottom();
  };

  render() {
    const { answerIndex, answerObj, answer } = this.props;
    if (answer === null) {
      return (
        <li onClick={() => this.clickedHandler(answerIndex)}>
          <span>{firstLetterArray[answerIndex]}</span>
          <p>{answerObj.answer}</p>
        </li>
      );
    } else if (answerIndex === answer) {
      return (
        <li
          style={
            answerObj.isCorrect
              ? { backgroundColor: "#b5e7a0", color: "white" }
              : { backgroundColor: "#d64161", color: "white" }
          }
        >
          <span>{firstLetterArray[answerIndex]}</span>
          <p>{answerObj.answer}</p>
        </li>
      );
    } else {
      return (
        <li>
          <span>{firstLetterArray[answerIndex]}</span>
          <p>{answerObj.answer}</p>
        </li>
      );
    }
  }
}

export default connect(AnswerCard);
