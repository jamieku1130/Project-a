import { connect } from "react-redux";
import { setVisibilityFilter } from "../../data/setVisibility";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    console.log(ownProps.filter);
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
