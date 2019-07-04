import colors from "./colors";
import fonts from "./fonts";
import styles from "./styles";
import prism from "./prism";
import { textStyles } from "./variants";

export default {
  fonts,
  initialColorMode: "light",
  colors,
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.45,
    heading: 1.125
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles,
  textStyles,
  prism
};
