const fs = require("fs");

// 1. Ensure that the directory exists.
exports.onPreBootstrap = ({ reporter }, options) => {
  const { contentPath = "data" } = options;
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

// 2. Create the custom graphql types.
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Event implements Node @dontInfer {
      id: ID!
      name: String!
      location: String!
      startDate: Date! @dateformat @proxy(from: "start_date")
      endDate: Date! @dateformat @proxy(from: "end_date")
      url: String!
      slug: String!
    }
  `);
};

// 3. Add the slugs into the newly created graphql types.
exports.createResolvers = ({ createResolvers }, options) => {
  const { basePath = "/" } = options;

  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g);

    return `/${basePath}/${slug}/`.replace(/\/\/+/g, "/");
  };

  createResolvers({
    Event: {
      slug: {
        resolve: source => slugify(source.name)
      }
    }
  });
};

// 4. Programmatically create pages for index and for
// each Event type.
exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const { basePath = "/" } = options;
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/Events.jsx")
  });

  const result = await graphql(`
    query {
      allEvent(sort: { fields: startDate, order: ASC }) {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.error) {
    reporter.panic("error loading events", result.errors);
  }

  const events = result.data.allEvent.nodes;

  events.forEach(event => {
    const { slug } = event;

    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/Event.jsx"),
      context: {
        eventID: event.id
      }
    });
  });
};
