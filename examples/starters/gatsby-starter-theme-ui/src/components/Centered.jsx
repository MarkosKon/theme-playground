/** @jsx jsx */
import { jsx, Box } from "theme-ui";

export default props => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "100%"
    }}
    {...props}
  />
);
