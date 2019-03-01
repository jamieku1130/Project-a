import React from "react";
import connect from "./connect";
const firstLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H"];

class ExamAnswerCard extends React.Component {
  state = {
    picked: false
  };
  clickedHandler = () => {
    const { answerObj, pickUpAnswer, answerIndex, id } = this.props;
    pickUpAnswer(answerIndex, answerObj.isCorrect, id);
    this.setState({
      picked: !this.state.picked
    });
  };

  render() {
    const { answerIndex, answerObj } = this.props;

    return (
      <li
        onClick={this.clickedHandler}
        style={this.state.picked ? { background: "#C0C0C0" } : null}
      >
        <span>{firstLetterArray[answerIndex]}</span>
        <p>{answerObj.answer}</p>
      </li>
    );
  }
}

export default connect(ExamAnswerCard);
