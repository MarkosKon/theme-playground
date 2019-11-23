const path = require("path");

module.exports = {
  plugins: [
    { resolve: "@affectionatedoor/gatsby-theme-ui", options: {} },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: path.resolve("./content/posts")
      }
    },
    "gatsby-transformer-remark"
  ]
};
