/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

export default props => (
  <Link
    {...props}
    sx={{
      display: "inline-block",
      color: "primary",
      "&:hover": { color: "accent" },
      "&:active": { color: "accent" },
      "&:focus": {
        outline: "1px solid transparent",
        boxShadow: theme => `0px 0px 0px 2px ${theme.colors.accent}`
      }
    }}
  />
);
