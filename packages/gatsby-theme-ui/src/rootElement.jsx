import React from "react";
import { ThemeProvider, ColorMode } from "theme-ui";
import { Global, css } from "@emotion/core";

import theme from "./theme";

import "./theme/colors.css";
import "normalize.css";

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <ColorMode />
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          .gatsby-highlight {
            border-radius: 0.3em;
            margin: 1.45em 0;
            overflow: auto;
          }
          .gatsby-highlight pre[class*="language-"] {
            margin: 0;
            overflow: initial;
            float: left;
            min-width: 100%;
          }
        `}
      />
      {element}
    </>
  </ThemeProvider>
);
