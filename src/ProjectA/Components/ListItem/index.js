import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import connect from "./connet";

const ListItem = ({
  title,
  marked,
  scored,
  answered,
  id,
  dismissHandler,
  jumpToQuiz
}) => (
  <li
    onClick={() => {
      dismissHandler();
      jumpToQuiz(id);
    }}
  >
    <div className="marks">
      <div style={marked ? { color: "orange" } : null}>
        <FontAwesomeIcon icon={faStar} size="sm" />
      </div>
      <div style={{ fontSize: "14px", fontWeight: 700 }}>
        <p>問題{id + 1}: </p>
      </div>
      <div>
        {answered ? (
          <p className="style-area blue">已做答</p>
        ) : (
          <p className="style-area grey">略過的題目</p>
        )}
      </div>

      <div>
        {answered ? (
          scored ? (
            <p className="style-area right">答對</p>
          ) : (
            <p className="style-area wrong">答錯</p>
          )
        ) : null}
      </div>
    </div>
    <div className="description">
      <p>{title}</p>
    </div>
  </li>
);

export default connect(ListItem);
