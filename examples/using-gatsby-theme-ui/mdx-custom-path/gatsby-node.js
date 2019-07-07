// gatsby-node.js

/* eslint-disable no-console */
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// 1. Create those slugs from file names.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: "slug",
      node,
      value: `/posts${value}`
    });
  }
};

// 2. Create pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMdx(
          filter: {
            frontmatter: { published: { eq: true }, type: { eq: "post" } }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) console.log(result.errors);

  const postTemplate = path.resolve(`./src/templates/PostTemplate.jsx`);

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: postTemplate,
      context: { id: node.id }
    });
  });
};
