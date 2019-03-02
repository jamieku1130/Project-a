import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { format } from "../Helper";

const Timer = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  align-items: center;
  & h4 {
    color: red;
  }

  & div button {
    font-size: 20px;
    border: transparent;
    background-color: transparent;
    color: #0084da;
  }
`;

const App = ({ elapsed, onToggleTimer }) => (
  <Timer>
    <div>
      <button onClick={onToggleTimer}>
        <FontAwesomeIcon icon={faPauseCircle} size="lg" />
      </button>
    </div>
    <h4>{format(elapsed)}</h4>
  </Timer>
);

export default App;
