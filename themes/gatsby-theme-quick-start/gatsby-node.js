const fs = require("fs");
// eslint-disable-next-line
const mkdirp = require("mkdirp");

// 1. Ensure that the directories exist.
exports.onPreBootstrap = ({ reporter }, options) => {
  const {
    imageDirectory = "src/images",
    pageDirectory = "src/pages"
  } = options;
  if (!fs.existsSync(imageDirectory)) {
    reporter.info(`creating the ${imageDirectory} directory`);
    mkdirp.sync(imageDirectory);
  }
  if (!fs.existsSync(pageDirectory)) {
    reporter.info(`creating the ${pageDirectory} directory`);
    mkdirp.sync(pageDirectory);
  }
};
