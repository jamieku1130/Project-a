import { connect } from "react-redux";
import {
  getQuizs,
  nextQuiz,
  backQuiz,
  markQuiz,
  resetState
} from "../../data/appState";
import { updateAnswerState } from "../../data/dashboard";
const mapStateToProps = state => ({
  quizs: state.app.quizs,
  answerStatus: state.app.answerStatus,
  index: state.app.index,
  total: state.app.total,
  score: state.app.score,
  percentage: state.app.percentage,
  cert: state.dashboard.selectedCertification,
  ocaProgress: state.dashboard.ocaProgress,
  ocpProgress: state.dashboard.ocpProgress
});

const mapDispatchToProps = {
  getQuizs,
  nextQuiz,
  backQuiz,
  markQuiz,
  resetState,
  updateAnswerState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
