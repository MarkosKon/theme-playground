import modes from "./color-mode-library";

export default {
  ...modes.rebecca,
  modes: {
    dark: modes.darkGreen,
    deep: modes.deep
  }
};
