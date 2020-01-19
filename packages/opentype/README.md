# OpenType

CSS that enables the OpenType features of your font files.

## Install

```bash
yarn add @affectionatedoor/opentype
```

## Usage with Gatsby

```js
// gatsby-browser.js
import "@affectionatedoor/opentype";
```

## CSS custom properties

```js
import "@affectionatedoor/opentype/css-custom-properties";
```

## OpenType features

- root: Kern, common alternates, ligatures, and common ligatures.
- `p`: old style numbers.
- `abbr`, `.small-caps`: small caps + old style numbers.
- `.petite-caps`: petite caps + old style numbers.
- `td`: tabular numbers.
- `.fraction`: diagonal fractions.
- `sub`, `.subscript`
- `sup`, `.superscript`
- `.dlig`: discretionary ligatures.
- `.swash`: discretionary ligatures + swashes.
- `.stylistic-alternates`: salt.
