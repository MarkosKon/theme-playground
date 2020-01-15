# gatsby-theme-quick-start

Set ups Theme UI, MDX, and some common Gatsby plugins like `gatsby-plugin-react-helmet` and sharp image plugins—see `gatsby-config` for more details. Uses a Theme UI [preset](https://github.com/MarkosKon/theme-playground/tree/master/packages/theme-ui/preset-typography) that focuses on typography. Injects a CSS file that enables [OpenType features](https://github.com/MarkosKon/theme-playground/blob/master/packages/gatsby-theme-quick-start/src/styles/opentype.css)—you need a font file that supports them to see the difference.

## Quick start

(No pun intended).

Create a new `hello-world` project:

```bash
gatsby new . https://github.com/gatsbyjs/gatsby-starter-hello-world
```

Install the theme along with Theme UI:

`yarn add @affectionatedoor/gatsby-theme-quick-start theme-ui`

Add the theme as a plugin in your `gatsby-config.js`:

```js
// gatsby-config.js
module.exports = {
  plugins: ["@affectionatedoor/gatsby-theme-quick-start"]
};
```

Use the Layout component in your index page:

```jsx
// src/pages/index.js
import React from "react";
import Layout from "@affectionatedoor/gatsby-theme-quick-start/src/components/Layout";

export default () => <Layout>Hello world!</Layout>;
```

Any `md`/`mdx` files inside your `src/pages` will be picked-up.

## Change the Theme UI theme

To change the Theme UI theme, create the following file: `/your-site/src/gatsby-plugin-theme-ui/index.js`. This is an example:

```jsx
// src/gatsby-plugin-theme-ui/index.js
import baseTheme from "@affectionatedoor/gatsby-theme-quick-start/src/gatsby-plugin-theme-ui/index";

const theme = {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    heading: "'Georgia', serif"
  }
};

export default theme;
```

This is the [preset](https://github.com/MarkosKon/theme-playground/tree/master/packages/theme-ui/preset-typography) used by the theme.

## Theme options

| Name            | Description                                                                                  | Type   | Default                                      |
| --------------- | -------------------------------------------------------------------------------------------- | ------ | -------------------------------------------- |
| imageDirectory  | Images for sharp                                                                             | string | `src/images`                                 |
| pageDirectory   | This exists to make mdx files available to GraphQL queries.                                  | string | `src/pages`                                  |
| logoFilename    | Place the logo inside the `imageDirectory`.                                                  | string | `gatsby-icon.png`                            |
| gatsbyMdxConfig | You can't configure gatsby-plugin-mdx multiple times so with this option you can override it | object | See `baseGatsbyMdxConfig` in `gatsby-config` |
