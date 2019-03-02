import React from "react";
import styled from "styled-components";
import { Circle } from "rc-progress";
import connect from "./connect";
import Header from "../Components/Header";
import { format } from "../Components/Helper";

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

const App = ({ score, total, location }) => {
  const timeArr = format(9000 - location.state.elapsed)
    .split(" : ")
    .map(elem => {
      if (elem[0] === "0") {
        return elem[1];
      } else {
        return elem;
      }
    });
  const percentage = (score / total) * 100;
  return (
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
              percent={percentage}
              strokeWidth="10"
              strokeColor={percentage > 65 ? `#19b5fe` : `#F45711`}
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
            <p>
              {timeArr[0]} 小時 {timeArr[1]} 分 {timeArr[2]} 秒
            </p>
          </div>
          <div className="container-content">
            <h2>答對題數</h2>
            <p>
              {score} of {total}
            </p>
          </div>
          <div className="container-content">
            <h2>測試結果</h2>
            <p style={percentage ? { color: "#19b5fe" } : { color: "#F45711" }}>
              {percentage > 65 ? " 合格" : "未通過"}
            </p>
          </div>
          <div className="container-content">
            <button>檢試考題與答案</button>
          </div>
        </ScoreContainer>
      </div>
    </Result>
  );
};
export default connect(App);
