import { connect } from "react-redux";

const mapStateToProps = state => ({
  //   quizs: state.app.quizs,
  quizs: state.app.quizs,
  answerStatus: state.app.answerStatus,
  index: state.app.index,
  filter: state.visibilityFilter
});

export default connect(mapStateToProps);
