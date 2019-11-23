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
  space: [0, 3.5, 7, 14, 28, 56, 84, 112, 224, 448],
  styles: {
    ...baseTheme.styles,
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: "16px"
    }
  }
};

export default theme;
