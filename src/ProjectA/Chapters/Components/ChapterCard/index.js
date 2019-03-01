import React, { Component } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { Circle } from "rc-progress";

const Card = styled.div`
  width: 280px;
  height: 80px;
  margin: 20px auto;
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 200px 80px;
  cursor: pointer;

  border-left: 5px solid ${props => props.inputColor};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease;
  &:hover {
    transform: scaleX(1.1);
  }
  @media (min-width: 768px) {
    width: 560px;
    grid-template-columns: 480px 80px;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: "Lato", sans-serif;
  & h2.text-box-primary {
    padding-left: 20px;
  }

  & h5.text-box-secondary {
    padding-left: 20px;
    color: #666;
    font-weight: 200;
  }
`;
const PercentageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & p.percentage-text {
    font-size: 12px;
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const colorMap = ["A2A0BB", "FF7187", "8380FF", "7EA9FF", "7100FF"];
const updateColor = percentage => {
  let colorIndex;
  if (percentage < 20) {
    colorIndex = 0;
  } else if (percentage >= 20 && percentage < 40) {
    colorIndex = 1;
  } else if (percentage >= 40 && percentage < 60) {
    colorIndex = 2;
  } else if (percentage >= 60 && percentage < 80) {
    colorIndex = 3;
  } else {
    colorIndex = 4;
  }
  return colorIndex;
};
class ChapterCard extends Component {
  state = {
    percentage: 0,
    currentColor: ""
  };

  componentDidMount = () => {
    const { percentage } = this.props;
    const colorIndex = updateColor(percentage);
    this.setState({
      percentage: percentage,
      currentColor: colorMap[colorIndex]
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.percentage !== prevState.percentage) {
      const colorIndex = updateColor(nextProps.percentage);
      return {
        percentage: nextProps.percentage,
        currentColor: colorMap[colorIndex]
      };
    } else return null;
  }

  clickHandler = id => {
    navigate(`/main/${id}`);
  };

  render() {
    const { title, percentage, course_ID } = this.props;
    const { currentColor } = this.state;
    return (
      <Card
        inputColor={`#${currentColor}`}
        onClick={() => this.clickHandler(course_ID)}
      >
        <TextBox>
          <h2 className="text-box-primary">Chapter{course_ID}</h2>
          <h5 className="text-box-secondary">{title}</h5>
        </TextBox>
        <PercentageBox>
          <p className="percentage-text">{percentage.toFixed(1)}%</p>
          <Circle
            style={{ width: "50%" }}
            percent={percentage}
            strokeWidth="10"
            strokeColor={currentColor}
          />
        </PercentageBox>
      </Card>
    );
  }
}

export default ChapterCard;
