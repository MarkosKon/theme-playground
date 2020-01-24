# Source Sans subsets

Unicode subsets for the Source Sans Pro typeface. The subsets focus only on Latin + Greek at the moment.

## Install

```bash
yarn add @affectionatedoor/source-sans-subsets
```

Import the CSS file (you need loaders for the CSS and font files):

```js
import "@affectionatedoor/source-sans-subsets";
// or if you want to use the variable fonts:
import "@affectionatedoor/source-sans-subsets/variable.css";
```

Use the font files in CSS:

```css
html {
  font-family: "Source Sans Pro", sans-serif;
}
/* or if you want to use the variable fonts:  */
html {
  font-family: "Source Sans Variable", sans-serif;
}
```

## Subsets

- Latin: U+0000-00FF.
- Phonetic alphabet: U+0250-02FF.
- Combining diacritical marks: U+0300-036F.
- Greek: U+0370-03FF.
- Greek extended: U+1F00-1FFF.
- Rest: U+2000-1F916.

**Note:** In IE9-11, `unicode-range` subsets don't work as expected, because the browser [downloads all the available font files](https://caniuse.com/#feat=font-unicode-range).

## Weights

Subsets are available for Regular, Italic, Bold, and BoldItalic. I may add more in the future. The variable font files have all the weights.

## Usage with Gatsby

```bash
// gatsby-browser.js
import @affectionatedoor/source-sans-subsets
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

See the link for more details.
