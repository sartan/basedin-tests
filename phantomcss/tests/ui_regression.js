var testSuite  = require('../includes/bootstrap.js'),
    phantomcss = testSuite.phantomcss,
    config     = testSuite.config,
    utils      = testSuite.utils,
    nav        = testSuite.navigation;

casper.test.begin('UI regression tests', function suite(test) {
  casper.start(casper.options.baseURI);
  console.log('Beginning tests for ' + casper.options.baseURI);

  // Home
  nav.goto('home');
  utils.captureMultiRez('body', 'home');

  // Login
  nav.goto('login');
  utils.captureMultiRez('body', 'login');

  // Customer account
  nav.login(config.customerUser, config.customerPass);
  utils.captureMultiRez('body', 'customer_account');
  nav.logout();

  // Business account
  nav.goto('login');
  nav.login(config.businessUser, config.businessPass);
  utils.captureMultiRez('body', 'business_account');
  nav.logout();

  // Customer registration
  nav.goto('registerCustomer');
  utils.captureMultiRez('body', 'register_customer');

  // Business registration
  nav.goto('registerBusiness');
  utils.captureMultiRez('body', 'register_business');

  // Plan selection
  nav.goto('planSelection');
  utils.captureMultiRez('body', 'plan_selection');

  // Business selection
  nav.goto('businessSelect');
  utils.captureMultiRez('body', 'business_select');

  // Category page
  nav.goto('categoryPage');
  utils.captureMultiRez('body', 'category_page');

  casper.then(function() {
    phantomcss.compareAll();
  });

  casper.then(function() {
    test.done();
  });

  casper.run(function() {
    phantomcss.getExitStatus();
  });
});