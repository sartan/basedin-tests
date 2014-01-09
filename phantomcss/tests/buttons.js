var test        = require('../includes/bootstrap.js'),
    phantomcss  = test.phantomcss,
    baseURI     = test.config.baseURI,
    resolutions = test.config.resolutions,

    // local test config
    testURI  = baseURI + '/user/login',
    testName = 'browse_categories_nav',
    username = 'customer',
    password = 'test',
    loginFormSelector = 'form#user-login';

phantom.cookiesEnabled = true;

casper.start(testURI);

casper.then(function logIn() {
  this.test.assertExists(loginFormSelector, 'form is found');
  this.fill(loginFormSelector, {
      name: username,
      pass: password
  }, true);

  this.evaluate(function () {
    $(loginFormSelector).submit();
  });
});

casper.then(function(){
  phantomcss.screenshot('body', 'customer_account');
});

/*
resolutions.forEach(function(resolution) {
  var x = resolution[0],
      y = resolution[1],
      browseCategoriesSelector = '#block-views-all-business-categories-block';

  casper.viewport(x, y);

  casper.then(function(){
    casper.click('a[data-target="' + browseCategoriesSelector + '"]');
    casper.waitForSelector(browseCategoriesSelector,
      function success(){
        phantomcss.screenshot(browseCategoriesSelector, testName + '_' + x + '_' + y);
      },
      function timeout(){
        casper.test.fail('Should see browse categories');
      }
    );
  });

  //#block-views-all-business-categories-block
});
*/
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

