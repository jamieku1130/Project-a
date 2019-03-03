import { connect } from "react-redux";
import { resetState } from "../data/appState";
const mapStateToProps = state => ({
  quizs: state.app.quizs,
  answerStatus: state.app.answerStatus,
  index: state.app.index,
  total: state.app.total
});

const mapDispatchToProps = {
  resetState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
