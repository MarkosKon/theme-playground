import React from "react";
import { ThemeProvider, ColorMode } from "theme-ui";
import { Global, css } from "@emotion/core";

import theme from "./theme";

import "typeface-oswald";
import "typeface-lora";
import "normalize.css";

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <ColorMode key="theme-ui-color-mode" />
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body.light {
            --text: #000;
            --background: #fff;
            --primary: rebeccapurple;
            --secondary: #e75480;
            --accent: orangered;
            --mute: #f6f6f6;
            --highlight-code: #ff450030;
          }
          body.dark {
            --text: #fff;
            --background: #101010;
            --primary: #59ab6d;
            --secondary: #59ab6d;
            --accent: #00b7ff;
            --mute: rgba(0, 0, 0, 0.5);
            --highlight-code: #00b7ff1f;
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
