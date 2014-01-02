var config = require('./config.json'),
    libraryRoot = '/Users/alex/dev/phantomcss',
    phantomcss  = require(libraryRoot + '/phantomcss.js');

phantomcss.init({
  screenshotRoot: './screenshots',
  failedComparisonsRoot: './failures',
  libraryRoot: libraryRoot
});

module.exports = {
  config : config,
  phantomcss : phantomcss
};