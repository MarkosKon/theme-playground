module.exports = {
  plugins: [
    {
      resolve: "@affectionatedoor/gatsby-theme-ui",
      options: {}
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`
      }
    }
    // {
    //   resolve: `gatsby-mdx`,
    //   options: {
    //     extensions: [`.mdx`, `.md`],
    //     defaultLayouts: {
    //       default: require.resolve(
    //         "@affectionatedoor/gatsby-theme-ui/src/components/Layout.jsx"
    //       )
    //     },
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           maxWidth: 1920,
    //           linkImagesToOriginal: false
    //         }
    //       },
    //       {
    //         resolve: "gatsby-remark-smartypants",
    //         options: {
    //           dashes: "oldschool"
    //         }
    //       },
    //       { resolve: "gatsby-remark-copy-linked-files", options: {} },
    //       {
    //         resolve: "gatsby-remark-external-links",
    //         options: {
    //           target: "_blank",
    //           rel: "noopener"
    //         }
    //       }
    //     ]
    //   }
    // }
  ]
};
