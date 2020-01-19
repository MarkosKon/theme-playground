/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const Button = ({ sx, ...restProps }) => (
  <button
    type="button"
    sx={{
      fontFamily: "body",
      fontWeight: 700,
      fontSize: 3,
      variant: "buttons.primary",
      py: 3,
      px: 4,
      cursor: "pointer",
      border: 0,
      ...sx
    }}
    {...restProps}
  />
);

Button.propTypes = {
  // eslint-disable-next-line
  sx: PropTypes.object
};

export default Button;
