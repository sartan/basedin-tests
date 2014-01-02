var test        = require('../bootstrap.js'),
    phantomcss  = test.phantomcss,
    baseURI     = test.config.baseURI,
    resolutions = test.config.resolutions,

    // local test config
    testURI  = baseURI,
    testName = 'basedin_home_hero';

casper.start(testURI);

resolutions.forEach(function(resolution) {
  var x = resolution[0],
      y = resolution[1];

  casper.viewport(x, y);

  casper.then(function(){
    phantomcss.screenshot('#page-hero', testName + '_' + x + '_' + y);
  });
});

casper.then(function(){
  phantomcss.compareAll();
});

casper.then(function(){
	casper.test.done();
});

casper.run(function(){
  console.log('\nTHE END.');
  phantom.exit(phantomcss.getExitStatus());
});

