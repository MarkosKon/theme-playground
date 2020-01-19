const path = require("path");

module.exports = {
  plugins: [
    "@affectionatedoor/gatsby-theme-quicker-start",
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
