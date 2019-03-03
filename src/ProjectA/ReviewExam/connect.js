import { connect } from "react-redux";

const mapStateToProps = state => ({
  quizs: state.app.quizs,
  answerStatus: state.app.answerStatus,
  index: state.app.index,
  total: state.app.total
});

export default connect(mapStateToProps);
