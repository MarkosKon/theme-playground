const path = require("path");
const remarkSlug = require("remark-slug");

const remarkPlugins = [remarkSlug];

const siteMetadata = {
  title: `gatsby-theme-ui`,
  description: `Gatsby theme ui`,
  author: `Mark`
};
module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-webpack-size`,
    `gatsby-plugin-emotion`,
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          // posts: require.resolve("./src/components/posts-layout.js"),
          default: require.resolve("./src/components/Layout.jsx")
        },
        extensions: [".mdx", ".md"],
        remarkPlugins,
        gatsbyRemarkPlugins: ["gatsby-remark-prismjs"]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.resolve(`./src/pages`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // Find user's images.
        // You could add a preBootstrap lifecycle to
        // create the directory if it doesn't exist.
        path: path.resolve(`./src/images`)
        // This find theme's images.
        // path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.name,
        short_name: `theme-ui`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
