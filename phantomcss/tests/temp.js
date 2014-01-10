var test = require('../includes/bootstrap.js'), phantomcss = test.phantomcss, config = test.config;

casper.test.begin('Customer account page', function suite(test) {
  casper.start(casper.options.baseURI, function() {
    casper.goto('login', function() {
      this.login(config.customerUser, config.customerPass);
      phantomcss.screenshot('body', 'customer_account');
      this.logout();
    });
  });

  casper.run(function() {
    test.done();
    phantomcss.compareAll();
    phantomcss.getExitStatus();
  });
});

casper.test.begin('Business account page', function suite(test) {
  casper.start(casper.options.baseURI, function() {
    casper.goto('login', function() {
      this.login(config.businessUser, config.businessPass);
      phantomcss.screenshot('body', 'business_account');
      this.logout();
    });
  });

  casper.run(function() {
    test.done();
    phantomcss.compareAll();
    phantomcss.getExitStatus();
  });
});