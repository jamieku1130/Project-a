import React from "react";
import connect from "./connect";
import ChapterCard from "../ChapterCard";

const ChapterList = ({ selectedCertification, ocaProgress, ocpProgress }) => (
  <div>
    {selectedCertification === "OCA"
      ? ocaProgress.map(obj => (
          <ChapterCard
            title={obj.title}
            course_ID={obj.course_ID}
            percentage={obj.percentage}
            key={obj.title + obj.course_ID}
          />
        ))
      : ocpProgress.map(obj => (
          <ChapterCard
            title={obj.title}
            course_ID={obj.course_ID}
            percentage={obj.percentage}
            key={obj.title + obj.course_ID}
          />
        ))}
  </div>
);

export default connect(ChapterList);
