/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const Button = ({ sx, ...restProps }) => (
  <button
    type="button"
    sx={{
      py: 3,
      px: 4,
      border: 0,
      cursor: "pointer",
      bg: "secondary",
      color: "text",
      "&:focus": {
        outline: "1px solid transparent",
        boxShadow: theme => `0px 0px 0px 2px ${theme.colors.accent}`
      },
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
