import { connect } from "react-redux";

const mapStateToProps = state => ({
  total: state.app.total,
  score: state.app.score,
  percentage: state.app.percentage
});

export default connect(mapStateToProps);
