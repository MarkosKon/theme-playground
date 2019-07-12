# gatsby-theme-ui

> A basic configuration of theme-ui as a Gatsby theme. Also includes some useful components. [In this link you can find examples.](https://github.com/MarkosKon/theme-playground/tree/master/examples/using-gatsby-theme-ui)

**Table of contents**

- [Theme options](#Theme-options)
- [Add fonts](#Add-fonts)
- [Change colors](#Change-colors)

## Theme options

| Name            | Description                                                                           | Type   | Default                                      |
| --------------- | ------------------------------------------------------------------------------------- | ------ | -------------------------------------------- |
| imageDirectory  | Images for sharp                                                                      | string | `src/images`                                 |
| pageDirectory   | This exists to make mdx files available to GraphQL queries.                           | string | `src/pages`                                  |
| logoFilename    | Place the logo inside the `imageDirectory`.                                           | string | `gatsby-icon.png`                            |
| gatsbyMdxConfig | You can't configure gatsby-plugin-mdx multiple times so with this option you can override it | object | See `baseGatsbyMdxConfig` in `gatsby-config` |

## Add fonts

Say you want to use the **Lora** font, both for headings and body.

1. Install the typeface package:

```bash
yarn add typeface-lora
```

1. Override (shadow) the theme's `fonts.js` by creating the following file at `src/@affectionatedoor/gatsby-theme-ui/theme/fonts.js`:

```js
export default {
  body: '"Lora", sans-serif',
  heading: '"Lora", serif',
  monospace: "Menlo, monospace"
};
```

3. Import the package at both `gatsby-ssr.js` and `gatsby-browser.js`:

```js
import "typeface-lora";
```

## Change colors

If you want to change the colors shadow the `src/theme/colors.css` **not** the `src/theme/colors.js`. If you want to rename/add new colors or modes, you'll have to shadow both.
