import React from "react";
import connect from "./connect";
import styled from "styled-components";
import Ball from "./Ball";
import { truncateWords } from "../Helper";

const BallContainer = styled.div`
  max-width: 260px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  flex-shrink: 280px;
  margin: 0 auto;
  margin-top: 20px;
  margin-right: 100px;
  margin-bottom: 20px;
`;

const TextBox = styled.div`
  max-width: 200px;
  height: 120px;
  background-color: #eee;
  font-size: 14px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  padding: 6px 10px;
  color: teal;
`;

class App extends React.Component {
  state = {
    text: ""
  };

  handleMouseOver = id => {
    this.setState({
      text: this.props.quizs[id].title
    });
  };

  render() {
    const { quizs, answerStatus } = this.props;
    return (
      <div>
        <BallContainer>
          {quizs.map(quiz => (
            <Ball
              answerStatus={answerStatus[quiz.id]}
              key={quiz.id}
              handleMouseOver={this.handleMouseOver}
            >
              {quiz.id}
            </Ball>
          ))}
        </BallContainer>
        <TextBox>{truncateWords(this.state.text, 20, "...")}</TextBox>
      </div>
    );
  }
}

export default connect(App);
