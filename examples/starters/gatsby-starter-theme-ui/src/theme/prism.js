export default {
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
    color: "purple"
  },
  [[".atrule", ".attr-value", ".keyword"]]: {
    color: "primary"
  },
  [[".selector", ".attr-name", ".string", ".char", ".builtin", ".inserted"]]: {
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
};
