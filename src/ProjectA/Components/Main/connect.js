import { connect } from "react-redux";
import {
  getQuizs,
  nextQuiz,
  backQuiz,
  markQuiz,
  resetState
} from "../../data/appState";
const mapStateToProps = state => ({
  quizs: state.app.quizs,
  answerStatus: state.app.answerStatus,
  index: state.app.index,
  total: state.app.total,
  score: state.app.score,
  percentage: state.app.percentage
});

const mapDispatchToProps = {
  getQuizs,
  nextQuiz,
  backQuiz,
  markQuiz,
  resetState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
