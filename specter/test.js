open("http://basedin.dev/", function() {
  test([960, 640, 320], function() {
    capture("body", "body");
  });

  finish();
});
