var config      = require('../config.json'),
    phantomcss  = require(config.libraryRoot + '/phantomcss.js');

phantomcss.init({
  screenshotRoot        : config.screenshotRoot,
  failedComparisonsRoot : config.failedComparisonsRoot,
  libraryRoot           : config.libraryRoot
});

require('./navigation.js');

casper.options.baseURI = config.baseURI;
exports.config = config;
exports.phantomcss = phantomcss;