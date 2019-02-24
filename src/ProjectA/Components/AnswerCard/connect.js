import { connect } from "react-redux";
import { answerQuiz } from "../../data/appState";

// const mapStateToProps = state => ({ answerStatus: state.app.answerStatus });
const mapDispatchToProps = { answerQuiz };

export default connect(
  null,
  mapDispatchToProps
);
