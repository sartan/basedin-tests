var test = require('../includes/bootstrap.js'), phantomcss = test.phantomcss, config = test.config;


casper.test.begin('Account and login pages', function suite(test) {
  casper.start(casper.options.baseURI);

  config.resolutions.forEach(function (resolution) {
    var x = resolution[0], y = resolution[1];
    test.comment('Testing at ' + x + 'x' + y + ' resolution');

    casper.viewport(x, y);

    // Login page
    casper.goto('login');
    phantomcss.screenshot('body', 'login_' + x + '_' + y);

    // Customer account page
    casper.login(config.customerUser, config.customerPass);
    phantomcss.screenshot('body', 'customer_account_' + x + '_' + y);
    casper.logout();

    // Business account page
    casper.goto('login');
    casper.login(config.businessUser, config.businessPass);
    phantomcss.screenshot('body', 'business_account_' + x + '_' + y);
    casper.logout();
  });

  casper.then(function() {
    phantomcss.compareAll();
  });

  casper.run(function () {
    test.done();
    phantomcss.getExitStatus();
  });
});