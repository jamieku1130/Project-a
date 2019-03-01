import { connect } from "react-redux";
import { getQuizs, submitAnswer, resetState } from "../../data/appState";
const mapStateToProps = state => ({
  quizs: state.app.quizs,
  answerStatus: state.app.answerStatus,
  index: state.app.index,
  score: state.app.score,
  percentage: state.app.percentage
});

const mapDispatchToProps = {
  getQuizs,
  submitAnswer,
  resetState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
