A Theme UI preset that focuses on typography.

## Install

`yarn add @affectionatedoor/preset-typography`

See how to [get started with Theme UI](https://theme-ui.com/getting-started), and how to [use a preset](https://theme-ui.com/packages/presets). If you are building a Gatsby app, you can use the [Gatsby plugin](https://theme-ui.com/packages/gatsby-plugin).

## Root element

The preset declares a `--rhythm` CSS custom property on the root element. As a result, don't forget to wrap your page with the `Styled.root` component:

```jsx
// src/pages/index.js
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

export default () => (
  <Styled.root>
    <main sx={{ m: "0 auto", maxWidth: "calc(var(--rhythm) * 22)" }}>
      {/* Content */}
    </main>
  </Styled.root>
);
```

Because I'm using custom properties for spacing, this preset will not work on IE11.

## Modifying the theme

If you want to change the font size or line height, use the root element. You should also update the typographic rhythm, which is the root element's `font-size` \* `line-height`:

```js
import baseTheme from "@affectionatedoor/preset-typography";

export default {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    heading: "'system-ui', sans-serif",
    body: "'system-ui', sans-serif"
  },
  styles: {
    ...baseTheme.styles,
    root: {
      ...baseTheme.styles.root,
      fontSize: ["16px", "18px"],
      lineHeight: [1.4, 1.5],
      "--rhythm": ["calc(1.4 * 16px)", "calc(1.5 * 18px)"]
    }
  }
};
```

This is the [source code](https://github.com/MarkosKon/theme-playground/blob/master/packages/theme-ui/preset-typography/src/index.js) for the theme.

## OpenType

If you want to quickly enable OpenType features for your font files, [use this package](https://github.com/MarkosKon/theme-playground/tree/master/packages/opentype).
