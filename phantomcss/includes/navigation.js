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
    console.log('Going from ' + this.getCurrentUrl() + ' to ' + routes[route]);
    this.thenOpen(this.options.baseURI + routes[route], callback);
  }
  return this;
}

casper.login = function(username, password) {
  var form = 'form#user-login';
  this.waitForSelector(form, function() {
    this.fill(form, {name: username, pass: password}, true);
    this.evaluate(function () {
      $(form).submit();
    });
  });

  return this;
}

casper.logout = function(callback) {
  this.goto('logout', callback);
}