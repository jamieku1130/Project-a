import { connect } from "react-redux";
import { jumpToQuiz } from "../../data/appState";

const mapDispatchToProps = {
  jumpToQuiz
};

export default connect(
  null,
  mapDispatchToProps
);
