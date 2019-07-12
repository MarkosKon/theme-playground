/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

const Link = ({ sx, ...restProps }) => (
  <GatsbyLink
    sx={{
      display: "inline-block",
      color: "primary",
      "&:hover": { color: "accent" },
      "&:active": { color: "accent" },
      "&:focus": {
        outline: "1px solid transparent",
        boxShadow: theme => `0px 0px 0px 2px ${theme.colors.accent}`
      },
      ...sx
    }}
    {...restProps}
  />
);

Link.propTypes = {
  // eslint-disable-next-line
  sx: PropTypes.object
};

export default Link;
