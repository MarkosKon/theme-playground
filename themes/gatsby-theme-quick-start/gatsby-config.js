const fs = require("fs");
const path = require("path");
const remarkSlug = require("remark-slug");

const remarkPlugins = [remarkSlug];

const siteMetadata = {
  title: `Theme UI`,
  description: `Gatsby Theme UI`,
  author: `Mark`
};

const baseGatsbyMdxConfig = {
  resolve: "gatsby-plugin-mdx",
  options: {
    defaultLayouts: {
      default: require.resolve("./src/components/Layout.jsx")
    },
    extensions: [".mdx", ".md"],
    remarkPlugins,
    gatsbyRemarkPlugins: ["gatsby-remark-prismjs"]
  }
};

module.exports = ({
  imageDirectory = "src/images",
  pageDirectory = "src/pages",
  logoFilename = "gatsby-icon.png",
  gatsbyMdxConfig = baseGatsbyMdxConfig
}) => {
  const logoUserPath = path.join(imageDirectory, logoFilename);
  const logoPath = fs.existsSync(logoUserPath)
    ? logoUserPath
    : require.resolve("./src/images/gatsby-icon.png");
  return {
    siteMetadata,
    plugins: [
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-webpack-size`,
      `gatsby-plugin-emotion`,
      "gatsby-plugin-catch-links",
      gatsbyMdxConfig,
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
          short_name: `Theme UI`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `Gatsby Theme UI`,
          icon: logoPath
        }
      }
    ]
  };
};
