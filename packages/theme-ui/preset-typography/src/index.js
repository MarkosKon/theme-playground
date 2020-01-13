const typographyTheme = {
  useCustomProperties: true,
  initialColorMode: "light",
  colors: {
    text: "hsl(10, 20%, 20%)",
    background: "hsl(10, 10%, 98%)",
    primary: "hsl(10, 80%, 50%)",
    secondary: "hsl(10, 60%, 50%)",
    accent: "hsl(250, 60%, 30%)",
    highlightCode: "hsl(10, 40%, 90%)",
    muted: "hsl(10, 20%, 94%)",
    modes: {
      dark: {
        text: "hsl(210, 50%, 96%)",
        background: "hsl(230, 25%, 18%)",
        primary: "hsl(260, 100%, 80%)",
        secondary: "hsl(290, 100%, 80%)",
        accent: "hsl(290, 100%, 80%)",
        muted: "hsla(230, 20%, 0%, 20%)",
        highlightCode: "hsla(260, 20%, 40%, 20%)"
      }
    }
  },
  fonts: {
    body: "'Alegreya Sans', 'Gill Sans', Arial, sans-serif",
    heading: "'Alegreya Sans', 'Gill Sans', Arial, sans-serif",
    monospace: "'Consolas', monospace"
  },
  fontSizes: [
    "0.422em",
    "0.563em",
    "0.75em",
    "1em",
    "1.333em",
    "1.777em",
    "2.369em",
    "3.157em",
    "4.209em"
  ],
  space: [
    0,
    "calc(var(--rhythm) / 8)",
    "calc(var(--rhythm) / 4)",
    "calc(var(--rhythm) / 2)",
    "var(--rhythm)",
    "calc(var(--rhythm) * 2)",
    "calc(var(--rhythm) * 3)",
    "calc(var(--rhythm) * 4)",
    "calc(var(--rhythm) * 8)",
    "calc(var(--rhythm) * 16)"
  ],
  styles: {
    root: {
      fontFamily: "body",
      fontSize: ["18px", "20px"],
      lineHeight: [1.3, 1.4],
      "--rhythm": ["calc(1.3 * 18px)", "calc(1.4 * 20px)"]
    },
    h1: {
      variant: "heading",
      fontSize: 6,
      mt: 5,
      mb: 4
    },
    h2: {
      variant: "heading",
      fontSize: 5,
      mt: 5,
      mb: 4
    },
    h3: {
      variant: "heading",
      fontSize: 4,
      mt: 5,
      mb: 4
    },
    h4: {
      variant: "heading",
      fontSize: 3,
      mt: 4,
      mb: 3
    },
    h5: {
      variant: "heading",
      fontSize: 3,
      mt: 4,
      mb: 3
    },
    h6: {
      variant: "heading",
      fontSize: 3,
      mt: 4,
      mb: 3
    },
    p: {
      colors: "text",
      mt: 0,
      mb: 4
    },
    ul: {
      pl: 4,
      m: 0,
      mb: 4,
      "& ul, & ol": {
        m: 0
      }
    },
    ol: {
      pl: 4,
      m: 0,
      mb: 4,
      "& ul, & ol": {
        m: 0
      }
    },
    li: {
      m: 0
    },
    pre: {
      variant: "prism",
      fontFamily: "monospace",
      overflowX: "auto",
      borderRadius: "4px",
      bg: "muted",
      color: "text",
      mt: 0,
      mb: 4,
      p: 3
      // code: {
      //   color: "inherit",
      // },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "18px"
      // fontSize: "inherit",
    },
    a: {
      variant: "links.text"
    },
    img: {
      maxWidth: "100%",
      borderRadius: "4px",
      mb: 4
    },
    table: {
      width: "100%",
      mb: 4,
      borderCollapse: "collapse",
      border: theme => `2px solid ${theme.colors.text}`,
      "& tbody": {
        verticalAlign: "middle"
      },
      "& caption": {
        py: 3,
        px: 1
      }
    },
    th: {
      bg: "muted",
      border: theme => `1px solid ${theme.colors.text}`,
      py: 2,
      px: 3,
      lineHeight: 1.2
    },
    td: {
      border: theme => `1px solid ${theme.colors.text}`,
      py: 2,
      px: 3,
      textAlign: "center"
    },
    blockquote: {
      fontStyle: "italic",
      fontSize: 3,
      bg: "muted",
      m: 0,
      mb: 4,
      p: 4,
      borderLeft: theme => `4px solid ${theme.colors.primary}`
    }
  },
  // Variants.
  borders: {
    primary: {
      border: theme => `2px solid ${theme.colors.primary}`
    }
  },
  // Color and link variants change only color related properties.
  // You still need a basic component with default styles.
  links: {
    text: {
      color: "primary",
      textDecoration: "underline",
      outline: "2px solid transparent",
      "&:hover, &:focus": {
        bg: "primary",
        color: "background",
        textDecoration: "none",
        boxShadow: theme => `0 0 0 2px ${theme.colors.primary}`
      }
    },
    // This overrides the text variant.
    ui: {
      color: "primary",
      bg: "transparent",
      textDecoration: "none",
      "&:hover": {
        bg: "transparent",
        color: "secondary",
        boxShadow: "none"
      },
      "&:focus": {
        bg: "transparent",
        color: "secondary",
        boxShadow: theme => `0 0 0 2px ${theme.colors.secondary}`,
        outline: "2px solid transparent"
      }
    }
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover, &:focus": {
        bg: "secondary"
      },
      "&:focus": {
        boxShadow: theme => `0 0 0 2px ${theme.colors.primary}`,
        outline: "2px solid transparent"
      }
    },
    transparent: {
      color: "primary",
      bg: "transparent",
      "&:hover, &:focus": {
        color: "background",
        bg: "secondary"
      },
      "&:focus": {
        boxShadow: theme => `0 0 0 2px ${theme.colors.primary}`,
        outline: "2px solid transparent"
      }
    }
  },
  heading: {
    fontFamily: "heading",
    fontWeight: 700,
    lineHeight: 1.1
  },
  prism: {
    [[
      ".comment",
      ".prolog",
      ".doctype",
      ".cdata",
      ".punctuation",
      ".operator",
      ".entity",
      ".url"
    ]]: {
      color: "gray"
    },
    ".comment": {
      fontStyle: "italic"
    },
    [[
      ".property",
      ".tag",
      ".boolean",
      ".number",
      ".constant",
      ".symbol",
      ".deleted",
      ".function",
      ".class-name",
      ".regex",
      ".important",
      ".variable"
    ]]: {
      color: "accent"
    },
    [[".atrule", ".attr-value", ".keyword"]]: {
      color: "primary"
    },
    [[
      ".selector",
      ".attr-name",
      ".string",
      ".char",
      ".builtin",
      ".inserted"
    ]]: {
      color: "secondary"
    },
    ".gatsby-highlight-code-line": {
      backgroundColor: "highlightCode",
      display: "block",
      marginRight: "-1em",
      marginLeft: "-1em",
      paddingRight: "1em",
      paddingLeft: "0.75em",
      borderLeft: theme => `0.25em solid ${theme.colors.accent}`
    }
  }
};

export default typographyTheme;
