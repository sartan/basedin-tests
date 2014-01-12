var test = require('../includes/bootstrap.js'), phantomcss = test.phantomcss, config = test.config;

casper.test.begin('CSS regression tests', function suite(test) {
  casper.start(casper.options.baseURI);
    // Home
    casper.goto('home');
    captureMultiRez('body', 'home');

    // Login
    casper.goto('login');
    captureMultiRez('body', 'login');

    // Customer account
    casper.login(config.customerUser, config.customerPass);
    captureMultiRez('body', 'customer_account');
    casper.logout();

    // Business account
    casper.goto('login');
    casper.login(config.businessUser, config.businessPass);
    captureMultiRez('body', 'business_account');
    casper.logout();

    // Customer registration
    casper.goto('registerCustomer');
    captureMultiRez('body', 'register_customer');

    // Business registration
    casper.goto('registerBusiness');
    captureMultiRez('body', 'register_business');

    // Plan selection
    casper.goto('planSelection');
    captureMultiRez('body', 'plan_selection');

    // Business selection
    casper.goto('businessSelect');
    captureMultiRez('body', 'business_select');

    // Category page
    casper.goto('categoryPage');
    captureMultiRez('body', 'category_page');

  casper.then(function() {
    phantomcss.compareAll();
  });

  casper.run(function () {
    test.done();
    phantomcss.getExitStatus();
  });
});

 function captureMultiRez(selector, imgPrefix) {
  config.resolutions.forEach(function (resolution) {
    var x = resolution[0], y = resolution[1], rezSuffix = x + '_' + y;
    casper.viewport(x, y);
    phantomcss.screenshot(selector, imgPrefix + '_' + rezSuffix);
  });
}