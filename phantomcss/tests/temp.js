var test = require('../includes/bootstrap.js'), phantomcss = test.phantomcss, config = test.config;


casper.test.begin('CSS regression tests', function suite(test) {
  casper.start(casper.options.baseURI);

  config.resolutions.forEach(function (resolution) {
    var x = resolution[0], y = resolution[1], rez_suffix = x + '_' + y;
    casper.viewport(x, y);

    // Home
    casper.goto('home');
    phantomcss.screenshot('body', 'home_' + rez_suffix);

    // Login
    casper.goto('login');
    phantomcss.screenshot('body', 'login_' + rez_suffix);

    // Customer account
    casper.login(config.customerUser, config.customerPass);
    phantomcss.screenshot('body', 'customer_account_' + rez_suffix);
    casper.logout();

    // Business account
    casper.goto('login');
    casper.login(config.businessUser, config.businessPass);
    phantomcss.screenshot('body', 'business_account_' + rez_suffix);
    casper.logout();

    // Customer registration
    casper.goto('registerCustomer');
    phantomcss.screenshot('body', 'register_customer_' + rez_suffix);

    // Business registration
    casper.goto('registerBusiness');
    phantomcss.screenshot('body', 'register_business_' + rez_suffix);

    // Plan selection
    casper.goto('planSelection');
    phantomcss.screenshot('body', 'plan_selection_' + rez_suffix);

    // Business selection
    casper.goto('businessSelect');
    phantomcss.screenshot('body', 'business_select_' + rez_suffix);

    // Category page
    casper.goto('categoryPage');
    phantomcss.screenshot('body', 'category_page_' + rez_suffix);

  });

  casper.then(function() {
    phantomcss.compareAll();
  });

  casper.run(function () {
    test.done();
    phantomcss.getExitStatus();
  });
});