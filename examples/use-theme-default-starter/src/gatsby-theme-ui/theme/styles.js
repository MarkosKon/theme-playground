import merge from "lodash.merge";
import styles from "gatsby-theme-ui/src/theme/styles";

export default merge({}, styles, {
  h1: {
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 8,
    my: 4
  }
});
