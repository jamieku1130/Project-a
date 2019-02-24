import { connect } from "react-redux";
import { VisibilityFilters } from "../../data/setVisibility";

const getVisibleTodos = (quizs, answerStatus, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return quizs;
    case VisibilityFilters.SHOW_IMCOMPLETED:
      return quizs.filter(quiz => !answerStatus[quiz.id].isAnswered);
    case VisibilityFilters.SHOW_MARKED:
      return quizs.filter(quiz => answerStatus[quiz.id].isMarked);
    case VisibilityFilters.SHOW_WRONG:
      return quizs.filter(
        quiz =>
          answerStatus[quiz.id].isAnswered && !answerStatus[quiz.id].scored
      );
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  //   quizs: state.app.quizs,
  quizs: getVisibleTodos(
    state.app.quizs,
    state.app.answerStatus,
    state.visibilityFilter
  ),
  answerStatus: state.app.answerStatus,
  index: state.app.index,
  filter: state.visibilityFilter
});

export default connect(mapStateToProps);
