const variables = {
  text: "var(--text)",
  background: "var(--background)",
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  accent: "var(--accent)",
  mute: "var(--mute)",
  highlightCode: "var(--highlight-code)"
};
export default {
  ...variables,
  modes: {
    dark: {
      ...variables
    }
  }
};
