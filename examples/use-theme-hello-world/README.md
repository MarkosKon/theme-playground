# Using gatsby-theme-ui package with the hello world starter

Things I noticed:

- You have to create a src/images folder with a gatsby-icon.png file.
- If you want to change the existing colors don't shadow the theme/colors.js. You just have to override the rootElement and it's global styles. Obviously the global styles need to be in a separate component. If you want to add new colors and modes you have to do both.
