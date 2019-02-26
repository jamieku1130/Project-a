import React from "react";
import connect from "./connect";
import ChapterCard from "../ChapterCard";

const calculatePercentage = obj => {
  let totoalAnswered = 0;
  let percentage;
  if (obj.answerState) {
    const keys = Object.keys(obj.answerState);
    for (const key of keys) {
      if (obj.answerState[key].isAnswered) {
        totoalAnswered += 1;
      }
    }
    percentage = (totoalAnswered / keys.length) * 100;
  } else {
    percentage = 0;
  }
  return percentage;
};

const ChapterList = ({ selectedCertification, ocaProgress, ocpProgress }) => (
  <div>
    {selectedCertification === "OCA"
      ? ocaProgress.map(obj => {
          const percentage = calculatePercentage(obj);

          return (
            <ChapterCard
              title={obj.title}
              course_ID={obj.course_ID}
              percentage={percentage}
              key={obj.title + obj.course_ID}
            />
          );
        })
      : ocpProgress.map(obj => {
          const percentage = calculatePercentage(obj);
          return (
            <ChapterCard
              title={obj.title}
              course_ID={obj.course_ID}
              percentage={percentage}
              key={obj.title + obj.course_ID}
            />
          );
        })}
  </div>
);

export default connect(ChapterList);
