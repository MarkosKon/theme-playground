# gatsby-theme-ui

## Theme options

| Name           | Description                                                 | Default           |
| -------------- | ----------------------------------------------------------- | ----------------- |
| imageDirectory | Images for sharp                                            | `src/images`      |
| pageDirectory  | This exists to make mdx files available to GraphQL queries. | `src/pages`       |
| logoFilename   | Place the logo inside the `imageDirectory`.                 | `gatsby-icon.png` |

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
