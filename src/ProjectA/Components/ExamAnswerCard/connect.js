import { connect } from "react-redux";
import { pickUpAnswer } from "../../data/appState";

const mapDispatchToProps = {
  pickUpAnswer
};

export default connect(
  null,
  mapDispatchToProps
);
