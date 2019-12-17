/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const Row = ({ className, gutters, gutterSize, children }) => (
  <div
    className={className}
    sx={{
      display: "flex",
      flexFlow: "row wrap",
      margin: gutters ? `-${gutterSize} 0 ${gutterSize} -${gutterSize}` : null,
      "& > *": {
        padding: gutters ? `${gutterSize} 0 0 ${gutterSize}` : null
      }
    }}
  >
    {children}
  </div>
);

Row.propTypes = {
  className: PropTypes.string,
  gutters: PropTypes.bool,
  gutterSize: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.func
  ])
};

Row.defaultProps = {
  className: null,
  gutters: null,
  gutterSize: "1em",
  children: null
};

export default Row;
