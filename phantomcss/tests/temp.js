var test = require('../includes/bootstrap.js'), config = test.config, nav = test.navigation;

casper.start(config.baseURI);
casper.then(nav.home());
casper.then(nav.login(config.customerUser, config.customerPass));
casper.then(nav.logout());
casper.then(nav.login(config.businessUser, config.businessPass));

casper.then(function() {
  console.log('Capturing ' + this.getCurrentUrl());
  this.capture('temp.png');
});

casper.run();
