import { Div } from "./Container.styles";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <Div>{children}</Div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
