import React from "react";
import ReactPaginate from "react-paginate";
import connect from "./connect";
import Header from "../Components/Header";
import ExamList from "./ExamList";

class ReviewExam extends React.Component {
  state = {
    count: 0
  };

  handlePageClick = data => {
    let selected = data.selected;
    this.setState({ count: selected });
  };
  render() {
    const { quizs, answerStatus, total } = this.props;
    const { count } = this.state;
    console.log(quizs, answerStatus, total);
    return (
      <div className="App">
        <Header />
        <div className="App-main-container">
          <div className="main-section">
            <ExamList quiz={quizs[count]} userAnswer={answerStatus[count]} />
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={total}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
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
