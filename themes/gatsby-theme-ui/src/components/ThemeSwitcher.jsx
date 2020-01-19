/** @jsx jsx */
import { jsx, useColorMode, Box } from "theme-ui";
import PropTypes from "prop-types";
import Button from "./Button";
import theme from "../gatsby-plugin-theme-ui";

let themes = ["light"];
const { modes } = theme.colors;
if (modes) themes = themes.concat(Object.keys(modes));

const ThemeSwitcher = ({ className }) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Box className={className}>
      <Button
        sx={{
          color: "background",
          bg: "primary",
          borderRadius: "2px",
          textTransform: "capitalize"
        }}
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

ThemeSwitcher.propTypes = {
  className: PropTypes.string
};

ThemeSwitcher.defaultProps = {
  className: null
};

export default ThemeSwitcher;
