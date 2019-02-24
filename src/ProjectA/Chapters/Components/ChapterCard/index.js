import React from "react";
import { Circle } from "rc-progress";

const ChapterCard = ({ chapter, percentage, answeredNumber }) => (
  <div className="chapter-card">
    <div className="text-box">
      <h2 className="text-box-primary">{chapter}</h2>
      <h5 className="text-box-primary"> {answeredNumber} of Questions</h5>
    </div>
    <div className="percentage-box">
      <p className="percentage-text">{percentage}%</p>
      <Circle
        style={{ width: "50%" }}
        percent={percentage}
        strokeWidth="10"
        strokeColor="bada55"
      />
    </div>
  </div>
);

export default ChapterCard;
