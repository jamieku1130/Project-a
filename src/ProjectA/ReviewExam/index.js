import React from "react";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import connect from "./connect";
import Header from "../Components/Header";
import ExamList from "./ExamList";

class ReviewExam extends React.Component {
  state = {
    count: 0
  };

  componentWillUnmount = () => {
    this.props.resetState();
  };
  handlePageClick = data => {
    let selected = data.selected;
    this.setState({ count: selected });
  };
  render() {
    const { quizs, answerStatus, total } = this.props;
    const { count } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="App-main-container">
          <div className="main-section">
            <ExamList quiz={quizs[count]} userAnswer={answerStatus[count]} />
            <ReactPaginate
              previousLabel={<FontAwesomeIcon icon={faAngleLeft} size="lg" />}
              nextLabel={<FontAwesomeIcon icon={faAngleRight} size="lg" />}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={total}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(ReviewExam);
