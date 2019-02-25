import { connect } from "react-redux";

const mapStateToProps = state => ({
  selectedCertification: state.dashboard.selectedCertification,
  ocaProgress: state.dashboard.ocaProgress,
  ocpProgress: state.dashboard.ocpProgress
});

export default connect(mapStateToProps);
