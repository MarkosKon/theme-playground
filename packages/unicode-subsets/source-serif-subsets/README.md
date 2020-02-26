# Source Serif Pro subsets

Unicode subsets for the Source Serif Pro typeface.

## Install

```bash
yarn add @affectionatedoor/source-serif-subsets
```

Import the CSS file (you need loaders for the CSS and font files):

```js
import "@affectionatedoor/source-serif-subsets";
// or if you want to use the variable fonts:
import "@affectionatedoor/source-serif-subsets/variable.css";
```

Use the font files in CSS:

```css
html {
  font-family: "Source Serif Pro", serif;
}
/* or if you want to use the variable fonts:  */
html {
  font-family: "Source Serif Variable", serif;
}
```

## Subsets

- Latin: U+0000-00FF.
- Latin Extended-A: U+0100-017F.
- Greek: U+0370-03FF.
- Cyrillic: U+0400-04FF.
- Latin Extended-Additional: U+1E00-1EFF.
- Rest middle: U+0180-036F, U+1D00-1DBF.
- Rest: U+2000-1F916.

**Note:** In IE9-11, `unicode-range` subsets don't work as expected, because the browser [downloads all the available font files](https://caniuse.com/#feat=font-unicode-range).

## Weights

Subsets are available for Regular, Italic, Bold, and BoldItalic. I may add more in the future. The variable font files have all the weights.

## Usage with Gatsby

```bash
// gatsby-browser.js
import @affectionatedoor/source-serif-subsets
```

**Important:** Many of the subset files are small, and, as a result, Gatsby will try to inline them as base64 strings in the CSS. This will result into a _huge CSS file_. To go around that, you'll have to [change the inline limit](https://github.com/KyleAMathews/typefaces/issues/104) for Webpack:

```js
// gatsby-node.js
exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();
  const fontRule = config.module.rules.find(rule =>
    String(rule.test).includes("woff")
  );
  // Set a very small limit of 3KB.
  fontRule.use[0].options.limit = 3000;
  actions.replaceWebpackConfig(config);
};
```

See the link above for more details.
