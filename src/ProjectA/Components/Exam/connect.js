import { connect } from "react-redux";
import { getQuizs, nextQuiz, resetState } from "../../data/appState";
const mapStateToProps = state => ({
  quizs: state.app.quizs,
  answerStatus: state.app.answerStatus,
  index: state.app.index,
  score: state.app.score,
  percentage: state.app.percentage
});

const mapDispatchToProps = {
  getQuizs,
  nextQuiz,
  resetState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
