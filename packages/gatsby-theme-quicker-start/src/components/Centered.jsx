/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import PropTypes from "prop-types";

const Centered = ({ sx, ...restProps }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "100%",
      ...sx
    }}
    {...restProps}
  />
);

Centered.propTypes = {
  // eslint-disable-next-line
  sx: PropTypes.object
};

export default Centered;
