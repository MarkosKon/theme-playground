import baseTheme from "@affectionatedoor/gatsby-theme-ui/src/theme/index";
import scales from "@affectionatedoor/gatsby-theme-ui/src/theme/scale-library";

const theme = {
  ...baseTheme,
  fontSizes: scales.golden,
  fonts: {
    body: '"Merriweather", Georgia, serif',
    heading: '"Merriweather", Georgia, serif',
    monospace: "Menlo, monospace"
  },
  lineHeights: {
    body: 1.75,
    heading: 1.1
  },
  space: [
    0,
    "0.21875rem",
    "0.4375rem",
    "0.875rem", // 1/2
    "1.75rem", // rhythm
    "3.5rem", // x2
    "5.25rem", // x3
    "7rem", // x4
    "14rem",
    "28rem"
  ]
};

export default theme;
