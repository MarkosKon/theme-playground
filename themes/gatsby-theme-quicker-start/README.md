Uses [@affectionatedoor/gatsby-theme-quick-start](https://github.com/MarkosKon/theme-playground/tree/master/themes/gatsby-theme-quick-start) and includes some extra components.

## Quick start

Create a new Gatsby project:

```bash
yarn add
```

Install the theme and the peer dependencies:

`yarn add @affectionatedoor/components`
`yarn add theme-ui gatsby-image sal.js`

Theme UI and `gatsby-image` are peer dependencies because you'll most likely use them for stuff other than this theme. `sal.js`, on the other hand, is a peer dependency because you'll have to initialize it if you want to use the `Sal` component—for on scroll animations.

## Components

The following components are available:

- SimpleCard
- ClickableCard
- ClickableCardAlt
- Row (flexbox)
- Column (flexbox)
- BgImage (Gatsby)
- Centered
- EmotionInMDX
- Rellax (rellax)
- Sal (sal.js. Needs extra config, see the source code for instructions.)

**Note:** Components like the cards are not 100% reusable, so if you want to alter something, you can shadow them.
