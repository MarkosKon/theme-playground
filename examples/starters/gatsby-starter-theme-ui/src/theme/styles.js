// All options: https://theme-ui.com/theme-spec#styles

const heading = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading"
};

export default {
  // Mdx + Styled.key
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
    fontSize: 3
  },
  h1: {
    ...heading,
    fontSize: 40,
    my: 4
  },
  h2: {
    ...heading,
    fontSize: 5
  },
  h3: {
    ...heading,
    fontSize: 3
  },
  h4: {
    ...heading,
    fontSize: 2
  },
  h5: {
    ...heading,
    fontSize: 1
  },
  h6: {
    ...heading,
    fontSize: 0
  },
  a: {
    color: "primary",
    "&:hover": {
      color: "accent"
    }
  },
  pre: {
    variant: "prism",
    fontFamily: "monospace",
    fontSize: 2,
    overflowX: "auto",
    p: 3,
    bg: "mute",
    code: {
      color: "inherit"
    }
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
  // ul: {

  // },
  // li: {

  // }
  //   theme-ui components
  //   Container: {
  //     maxWidth: 768,
  //   },
};
