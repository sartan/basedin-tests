var config      = require('../config.json'),
    phantomcss  = require(config.libraryRoot + '/phantomcss.js');

phantomcss.init({
  screenshotRoot        : config.screenshotRoot,
  failedComparisonsRoot : config.failedComparisonsRoot,
  libraryRoot           : config.libraryRoot
});

casper.options.baseURI  = config.baseURI;

exports.config     = config;
exports.phantomcss = phantomcss;
exports.navigation = require('./navigation.js').init(config.routes);
exports.utils      = require('./utils.js').init(config, phantomcss);
