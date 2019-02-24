import React from "react";

const QuestionCard = ({ title, id, code, imageUrl }) => (
  <div className="question-card">
    <p>問題 {id + 1} :</p>
    <h3>{title}</h3>
    {code ? <pre dangerouslySetInnerHTML={{ __html: code }} /> : null}
    {imageUrl ? (
      <div className="image-container">
        <img src={imageUrl} alt="question" />
      </div>
    ) : null}
  </div>
);

export default QuestionCard;
