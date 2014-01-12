var routes = {
  home   : '/',
  login  : '/user/login',
  logout : '/user/logout',
  registerCustomer : '/register/customer',
  registerBusiness : '/register/business',
  accountCustomer  : '/account/customer',
  accountBusiness  : '/account/business',
  planSelection    : '/content/plan-selection',
  businessSelect   : '/business-category/car-rental',
  categoryPage     : '/category/automotive-transportation'
};

casper.goto = function(route, callback) {
  if (route in routes) {
    //console.log('Going from ' + this.getCurrentUrl() + ' to ' + routes[route]);
    this.thenOpen(this.options.baseURI + routes[route], callback);
  }
  return this;
}

casper.login = function(username, password) {
  var selector = 'form#user-login';
  this.waitForSelector(selector, function() {
    this.fill(selector, {name: username, pass: password}, true);
    this.evaluate(function () {
      $(selector).submit();
    });
  });

  return this;
}

casper.logout = function(callback) {
  this.goto('logout', callback);
}

casper.expandNavCategories = function() {
  var selector = '#block-views-all-business-categories-block';
  casper.click('a[data-target="' + selector + '"]');
  casper.waitForSelector(selector);
  return this;
}