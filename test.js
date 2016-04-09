var test = require('tape');
var on = require("./");

document.body.innerHTML = '<ul><li><a>Foo</a></li><li>Bar</li><li>Qux</li></ul>';

test('adds event to specified selector', function (t) {
  t.plan(1);

  var fn = on(document.body, 'ul li a', 'click', function (e) {
    on.off(document.body, 'click', fn);
    document.querySelector('ul li a').click();
    t.ok(true);
  });

  document.querySelector('ul li a').click();
});
