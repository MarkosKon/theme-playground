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
    body: null,
    heading: 1.1
  },
  space: [
    0,
    "var(--rhythm-eighth)",
    "var(--rhythm-quarter)",
    "var(--rhythm-half)",
    "var(--rhythm)",
    "var(--rhythm-x2)",
    "var(--rhythm-x3)",
    "var(--rhythm-x4)",
    "var(--rhythm-x8)",
    "var(--rhythm-x16)"
  ],
  styles: {
    ...baseTheme.styles,
    h1: {
      ...baseTheme.styles.h1,
      fontSize: [5, 6]
    },
    h2: {
      ...baseTheme.styles.h2,
      fontSize: [4, 5]
    }
  }
};

export default theme;
