import React from "react";
import QuestionCard from "../../Components/QuestionCard";
import ExamAnalysisCard from "../../Components/ExamAnalysisCard";
import "../../../App.css";

const firstLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H"];

const parseAnswer = arr => {
  if (arr === null) {
    return "未做答";
  } else {
    return arr
      .map(index => firstLetterArray[index])
      .reduce((result, elem) => {
        return (result += elem);
      }, "");
  }
};

const ExamList = ({ quiz, userAnswer }) => {
  return quiz ? (
    <div className="main-section">
      <QuestionCard
        title={quiz.title}
        id={quiz.id}
        code={quiz.code}
        imageUrl={quiz.imageUrl}
      />
      <div className="exam-list">
        <ol type="A">
          {quiz.answerArray.map((obj, index) => (
            <li key={index}>{obj.answer}</li>
          ))}
        </ol>
        <p>
          你(妳)的答案{" "}
          {parseAnswer(
            userAnswer.answer && userAnswer.answer.map(obj => obj.id)
          )}
        </p>
        <p>正確答案 {parseAnswer(quiz.answersIntArray)}</p>
      </div>

      <ExamAnalysisCard explain={quiz.explain} />
    </div>
  ) : null;
};
export default ExamList;
