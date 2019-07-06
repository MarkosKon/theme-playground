/** @jsx jsx */
import { jsx } from "theme-ui";

const Button = props => (
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
      }
    }}
    {...props}
  />
);

export default Button;
