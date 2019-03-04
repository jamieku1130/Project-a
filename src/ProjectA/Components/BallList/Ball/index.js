import React from "react";
import connect from "./connect";
import styled from "styled-components";

const BallStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  margin-top: 8px;
  border-radius: 50%;
  border: 2px solid #eee;
  color: white;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: scale(1.1);
    color: goldenrod;
    font-weight: 700;
  }
`;

const Ball = ({ children, answerStatus, jumpToQuiz, handleMouseOver }) => {
  const bgColor = answerStatus.isMarked
    ? "#F5A623"
    : answerStatus.scored
    ? "#4a90e2"
    : answerStatus.isAnswered
    ? "#d0021b"
    : "#d8d8d8";
  return (
    <BallStyle
      style={{ backgroundColor: `${bgColor}` }}
      onClick={() => jumpToQuiz(children)}
      onMouseOver={() => handleMouseOver(children)}
    >
      {children + 1}
    </BallStyle>
  );
};

export default connect(Ball);
