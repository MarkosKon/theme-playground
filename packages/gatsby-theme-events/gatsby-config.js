// const path = require("path");

module.exports = ({ contentPath = "data", basePath = "/" }) => ({
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPath
        // path: path.resolve(`./src/data`)
      }
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: `Event`
      }
    }
  ]
});
