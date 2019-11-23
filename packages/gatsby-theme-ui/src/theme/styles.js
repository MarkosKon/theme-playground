// All options: https://theme-ui.com/theme-spec#styles
import root from "./root";

const heading = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  mt: 5,
  mb: 4
};

export default {
  // Mdx + Styled.key
  root,
  h1: {
    ...heading,
    fontSize: 6,
    mt: 6
  },
  h2: {
    ...heading,
    fontSize: 5
  },
  h3: {
    ...heading,
    fontSize: 4
  },
  h4: {
    ...heading,
    fontSize: 3
  },
  h5: {
    ...heading,
    fontSize: 3,
    mt: 4,
    mb: 3
  },
  h6: {
    ...heading,
    fontSize: 3,
    mt: 4,
    mb: 3
  },
  p: {
    fontSize: 3,
    m: 0,
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
  img: {
    width: "100%",
    borderRadius: "5px"
  },
  a: {
    color: "primary",
    "&:hover": {
      color: "accent"
    }
  },
  blockquote: {
    fontStyle: "italic",
    fontSize: 3,
    m: 0,
    mb: 4,
    pl: 4,
    borderLeft: t => ` ${t.fontSizes[1]} solid ${t.colors.accent}`
  },
  pre: {
    variant: "prism",
    fontFamily: "monospace",
    fontSize: "16px",
    overflowX: "auto",
    p: 3,
    bg: "mute",
    code: {
      color: "inherit"
    },
    m: 0,
    mb: 4
  },
  code: {
    fontFamily: "monospace",
    fontSize: "inherit",
    bg: "mute"
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0
  },
  th: {
    textAlign: "left",
    padding: 1,
    borderBottomStyle: "solid",
    borderBottomWidth: "2px",
    borderBottomColor: "rgb(246, 246, 246)"
  },
  td: {
    textAlign: "left",
    padding: 1,
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: "rgb(246, 246, 246)"
  }
  //   theme-ui components
  //   Container: {
  //     maxWidth: 768,
  //   },
};
