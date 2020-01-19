// const path = require("path");

// module.exports = ({ contentPath = "data", basePath = "/" }) => ({
module.exports = ({ contentPath = "data" }) => ({
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
