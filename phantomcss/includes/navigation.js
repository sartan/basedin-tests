exports.home = function() {
  return function() {
    var url = '/';

    this.evaluate(function() {
      window.location = url;
    }, {url: url});
    this.waitForUrl(url);
  }
}

exports.login = function(username, password) {
  return function() {
    var url = '/user/login', form = 'form#user-login';

    this.evaluate(function(url) {
      window.location = url;
    }, {url: url});

    this.waitForUrl(url, function() {
      this.test.assertExists(form, 'Login form found');
      this.fill(form, {name: username, pass: password}, true);
      this.evaluate(function () {
        $(form).submit();
      });
    });
  }
}

exports.logout = function() {
  return function() {

    this.evaluate(function() {
      window.location = '/user/logout';
    });

    this.waitForUrl('/'); // Redirects to home page on logout
  }
}