var routes = {};

exports.init = function (routes) {
  this.routes = routes;
  return this;
}

exports.goto = function(route, callback) {
  if (route in this.routes) {
    var routes = this.routes;
    casper.then(function() {
      console.log('Navigating from ' + casper.getCurrentUrl().replace(casper.options.baseURI, '') + ' to ' + routes[route]);
      casper.thenOpen(casper.options.baseURI + routes[route], callback);
    });
  }
}

exports.login = function(username, password) {
  casper.then(function() {
    console.log('Logging in...');
    var selector = 'form#user-login';
    casper.waitForSelector(selector, function() {
      this.fill(selector, {name: username, pass: password}, true);
      this.evaluate(function () {
        $(selector).submit();
      });
    });
  });
}

exports.logout = function(callback) {
  var nav = this;
  casper.then(function() {
    console.log('Logging out...');
    nav.goto('logout', callback);
  });
}

exports.expandNavCategories = function() {
  casper.then(function() {
    var selector = '#block-views-all-business-categories-block';
    casper.click('a[data-target="' + selector + '"]');
    casper.waitForSelector(selector);
  });
}