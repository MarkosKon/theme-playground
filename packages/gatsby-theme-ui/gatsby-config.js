const fs = require("fs");
const path = require("path");
const remarkSlug = require("remark-slug");

const remarkPlugins = [remarkSlug];

const siteMetadata = {
  title: `gatsby-theme-ui`,
  description: `Gatsby theme ui`,
  author: `Mark`
};

module.exports = ({
  imageDirectory = "src/images",
  pageDirectory = "src/pages",
  logoFilename = "gatsby-icon.png"
}) => {
  const logoUserPath = path.join(imageDirectory, logoFilename);
  const logoPath = fs.existsSync(logoUserPath)
    ? logoUserPath
    : require.resolve("./src/images/gatsby-icon.png");
  return {
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
          name: `mdxPages`,
          path: path.resolve(`./${pageDirectory}`)
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          // Find user's images.
          path: path.resolve(`./${imageDirectory}`)
          // To find theme's images:
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
          icon: logoPath
        }
      }
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    ]
  };
};
