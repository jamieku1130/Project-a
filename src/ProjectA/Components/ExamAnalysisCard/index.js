import React from "react";

const ExamAnalysisCard = ({ explain }) => {
  return (
    <div className="analysis-card">
      <h3>題解 ：</h3>
      <p>
        {explain
          .split(".")[0]
          .split(", ")
          .map((char, index) => (
            <span style={{ marginRight: "5px" }} key={index}>
              {char}
            </span>
          ))}
        {explain.substring(explain.split(".")[0].length, explain.length)}
      </p>
    </div>
  );
};
export default ExamAnalysisCard;
