var config = {}, phantomcss = {};

exports.init = function(config, phantomcss) {
  this.config = config;
  this.phantomcss = phantomcss;
  return this;
}

exports.captureMultiRez = function(selector, imgPrefix) {
  var resolutions = this.config.resolutions,
      phantomcss  = this.phantomcss;

  casper.then(function() {
    resolutions.forEach(function (resolution) {
      var x = resolution[0],
          y = resolution[1];

      casper.then(function() {
        console.log('Capturing "' + imgPrefix.replace('_', ' ') + '" @ ' + x + 'x' + y);
        casper.viewport(x, y, function() {
          phantomcss.screenshot(selector, imgPrefix + '_' + x + '_' + y);
        });
      });
    });
  });
}