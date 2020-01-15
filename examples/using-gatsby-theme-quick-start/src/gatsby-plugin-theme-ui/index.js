import baseTheme from "@affectionatedoor/gatsby-theme-quick-start/src/gatsby-plugin-theme-ui/index";

const theme = {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    heading: "'Georgia', serif"
  }
};

export default theme;
