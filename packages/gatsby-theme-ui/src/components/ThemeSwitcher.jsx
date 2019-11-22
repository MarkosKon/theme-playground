/** @jsx jsx */
import { jsx, useColorMode, Box } from "theme-ui";
import Button from "./Button";
import theme from "../gatsby-plugin-theme-ui";

let themes = ["light"];
const { modes } = theme.colors;
if (modes) themes = themes.concat(Object.keys(modes));

export default () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Box sx={{ py: 3, px: [2, 3], textAlign: "right" }}>
      <Button
        sx={{ borderRadius: "2px", textTransform: "capitalize" }}
        onClick={() => {
          const index = themes.indexOf(colorMode);
          const next = themes[(index + 1) % themes.length];
          setColorMode(next);
        }}
      >
        {`${colorMode} mode`}
      </Button>
    </Box>
  );
};
