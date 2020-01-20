exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();
  const fontRule = config.module.rules.find(rule =>
    String(rule.test).includes("woff")
  );
  // Set a very small limit of 3KB.
  fontRule.use[0].options.limit = 3000;
  actions.replaceWebpackConfig(config);
};
