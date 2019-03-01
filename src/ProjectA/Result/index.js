import React from "react";
import styled from "styled-components";
import { Circle } from "rc-progress";
import connect from "./connect";
import Header from "../Components/Header";

const Result = styled.div`
  height: 100vh;
  font-family: "Noto Sans TC", sans-serif;
  & div.main-content {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;
const ScoreContainer = styled.div`
  width: 360px;
  height: 360px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  background-color: rgba(240, 240, 240, 0.8);
  @media (min-width: 1200px) {
    transform: scale(1.2);
  }

  & div.container-title {
    width: 100%;
    height: 60px;
    background: #323a45;
    color: white;
    display: flex;
    align-items: center;
    h2 {
      margin-left: 28px;
    }
  }
  & .container-graph {
    display: flex;
    width: 100%;
    height: 360px;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  & div.container-content {
    width: 100%;
    height: 60px;
    display: flex;
    background-color: white;
    margin: 4px;
    align-items: center;
    justify-content: space-between;
    h2 {
      margin-left: 28px;
    }
    p {
      margin-right: 28px;
    }
    button {
      width: 95%;
      display: block;
      background-color: #f49c11;
      margin: 0 auto;
      color: white;
      height: 60px;
      font-size: 32px;
      transition: all 0.5s ease-in-out;
      :hover {
        background-color: blue;
        color: white;
      }
    }
  }
`;

const PercentageText = styled.p`
  font-size: 60px;
  font-weight: 700;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const App = ({ percentage, score, total }) => (
  <Result>
    <Header />
    <div className="main-content">
      <ScoreContainer>
        <div className="container-title">
          <h2>PASS RATE:</h2>
        </div>
        <div className="container-graph">
          <PercentageText>{percentage.toFixed(1)}%</PercentageText>
          <Circle
            style={{
              width: "80%",
              backgroundColor: "#F49C11",
              borderRadius: "50%"
            }}
            percent={70}
            strokeWidth="10"
            strokeColor={`#19b5fe`}
            gapDegree={70}
            gapPosition="top"
          />
        </div>
      </ScoreContainer>
      <ScoreContainer>
        <div className="container-title">
          <h2>SUMMARY:</h2>
        </div>
        <div className="container-content">
          <h2>使用時間</h2>
          <p>1 小時 20分 58秒</p>
        </div>
        <div className="container-content">
          <h2>答對題數</h2>
          <p>70 of 80</p>
        </div>
        <div className="container-content">
          <h2>測試結果</h2>
          <p>合格</p>
        </div>
        <div className="container-content">
          <button>檢試考題與答案</button>
        </div>
      </ScoreContainer>
    </div>
  </Result>
);

export default connect(App);
