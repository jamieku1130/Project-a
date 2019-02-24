import React from "react";
import styled, { css } from "styled-components";
import connect from "./connect";
import ListItem from "../ListItem";
import Header from "../Header";
import LinkControl from "../LinkControl";

const truncateWords = (sentence, amount, tail) => {
  const words = sentence.split(" ");

  if (amount >= words.length) {
    return sentence;
  }

  const truncated = words.slice(0, amount);
  return `${truncated.join(" ")}${tail}`;
};

const FlyOutMenu = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
  z-index: 1000;
  ${props =>
    props.visible &&
    css`
      transform: translate3d(0vw, 0, 0);
    `}

  ${props =>
    !props.visible &&
    css`
      transform: translate3d(-100vw, 0, 0);
    `}
    button {
    border: none;
    font-size: 16px;
    color: #0084da;
    margin: 0;
  }
`;

const List = ({ visible, dismissHandler, quizs, answerStatus }) => {
  return (
    <FlyOutMenu visible={visible}>
      <Header />
      <div className="App-main-container">
        <LinkControl />
        <div className="list-container">
          <button onClick={dismissHandler}>BACK</button>

          <ul>
            {quizs.map((quiz, i) => (
              <ListItem
                key={quiz.title + i}
                title={truncateWords(quiz.title, 12, " ...")}
                marked={answerStatus[quiz.id].isMarked}
                answered={answerStatus[quiz.id].isAnswered}
                scored={answerStatus[quiz.id].scored}
                id={quiz.id}
                dismissHandler={dismissHandler}
              />
            ))}
          </ul>
        </div>
      </div>
    </FlyOutMenu>
  );
};

export default connect(List);
