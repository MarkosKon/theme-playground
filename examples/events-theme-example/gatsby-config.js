module.exports = {
  plugins: [
    "gatsby-theme-ui",
    {
      resolve: "gatsby-theme-events",
      options: {
        contentPath: "events",
        basePath: "/events"
      }
    }
  ]
};
