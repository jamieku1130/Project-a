import React from "react";

const ExamAnalysisCard = ({ explain }) => {
  return (
    <div className="analysis-card">
      <h3>題解 ：</h3>
      <p>
        {explain
          .split(".")[0]
          .split(", ")
          .map(char => (
            <span style={{ marginRight: "5px" }} key={explain}>
              {char}
            </span>
          ))}
        {explain.split(".")[1]}
      </p>
    </div>
  );
};
export default ExamAnalysisCard;
