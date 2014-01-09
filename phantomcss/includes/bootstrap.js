var config      = require('../config.json'),
    phantomcss  = require(config.libraryRoot + '/phantomcss.js');

phantomcss.init({
  screenshotRoot        : config.screenshotRoot,
  failedComparisonsRoot : config.failedComparisonsRoot,
  libraryRoot           : config.libraryRoot
});

exports.config = config;
exports.phantomcss = phantomcss;
exports.navigation = require('./navigation.js');