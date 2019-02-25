import { connect } from "react-redux";
import { updateCertification } from "../data/dashboard";

const mapDispatchToProps = {
  updateCertification
};

export default connect(
  null,
  mapDispatchToProps
);
