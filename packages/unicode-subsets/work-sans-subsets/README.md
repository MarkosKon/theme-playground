# Work Sans subsets

Unicode subsets for the Work Sans typeface. Includes italic files that are not available in Google Fonts at the moment. [Source code.](https://github.com/MarkosKon/theme-playground/tree/master/packages/unicode-subsets/work-sans-subsets)

## Install

```bash
yarn add @affectionatedoor/work-sans-subsets
```

Import the CSS file (you need loaders for the CSS and font files):

```js
import "@affectionatedoor/work-sans-subsets";
// or if you want to use the variable fonts:
import "@affectionatedoor/work-sans-subsets/variable.css";
```

Use the font files in CSS:

```css
html {
  font-family: "Work Sans", sans-serif;
}
/* or if you want to use the variable fonts:  */
html {
  font-family: "Work Sans Variable", sans-serif;
}
```

### No hinting

If hinting is not important to you, or you want smaller files, you can instead use the CSS that points to the files without hinting:

```js
import "@affectionatedoor/work-sans-subsets/no-hint.css";
// or
import "@affectionatedoor/work-sans-subsets/no-hint-variable.css";
```

## Subsets

- Latin: U+0000-00FF.
- Latin Extended-A: U+0100-017F.
- Latin Extended Additional: U+1E00-1EFF.
- Rest: U+2000-FB02.

## Not included

I didn't include the following sets because they didn't have enough glyphs (version 2.007).

- Latin Extended-B: U+0180-024F.
- Phonetic alphabet: U+0250-02FF.
- Combining diacritical marks: U+0300-036F.
- Greek: U+0370-03FF.

**Note:** In IE9-11, `unicode-range` subsets don't work as expected; the browser [downloads all the available font files](https://caniuse.com/#feat=font-unicode-range).

## Weights

Subsets are available for Regular, Italic, Bold, and BoldItalic. I may add more in the future. The variable font files have all the weights.

## Usage with Gatsby

```bash
// gatsby-browser.js
import @affectionatedoor/work-sans-subsets
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
