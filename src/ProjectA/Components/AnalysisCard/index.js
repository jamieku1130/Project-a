import React from "react";

const AnalysisCard = ({ explain }) => (
  <div className="analysis-card">
    <h3>題解 ：</h3>
    <p>
      <span>{explain[0]}</span>
      {explain.substr(1)}
    </p>
  </div>
);

export default AnalysisCard;
