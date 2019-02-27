import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import connect from "./connect";

const Timer = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & div h4 {
    color: red;
  }

  & div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 10px;
  }

  & div div button {
    font-size: 20px;
    border: transparent;
    background-color: transparent;
    color: #0084da;
  }
`;

class Clock extends Component {
  format = time => {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60) % 60;
    let hours = Math.floor(time / 60 / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    hours = hours.toString().length === 1 ? "0" + hours : hours;
    return hours + " : " + minutes + " : " + seconds;
  };
  render() {
    const { time } = this.props;
    return (
      <div>
        <h4>{this.format(time)}</h4>
      </div>
    );
  }
}

class App extends Component {
  state = {
    count: 9000,
    running: true
  };

  componentDidMount = () => {
    this.tick();
  };
  componentWillMount = () => {
    this.handleStop();
  };

  handleStart = () => {
    this.setState({ running: true }, () => this.tick());
  };

  tick = () => {
    if (this.state.running) {
      this.timer = setInterval(() => {
        const newCount = this.state.count - 1;
        this.setState({ count: newCount });
      }, 1000);
    }
  };

  handleStop = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.setState({ running: false });
    }
  };

  render() {
    const { count, running } = this.state;
    return (
      <Timer>
        <Clock time={count} />
        <div>
          <div>
            <button onClick={this.handleStop} disabled={!running}>
              <FontAwesomeIcon icon={faPauseCircle} size="lg" />
            </button>
          </div>
          <div>
            <button onClick={this.handleStart} disabled={running}>
              <FontAwesomeIcon icon={faPlayCircle} size="lg" />
            </button>
          </div>
        </div>
      </Timer>
    );
  }
}

export default App;
