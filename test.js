var on = require("./");

before(function(done){
  document.body.innerHTML = '<ul><li><a>Foo</a></li><li>Bar</li><li>Qux</li></ul>';
  done();
});

it('adds event to specified selector', function(done){
  var fn = on(document.body, 'ul li a', 'click', function (e) {
    on.off(document.body, 'click', fn);
    document.querySelector('ul li a').click();
    done();
  });

  document.querySelector('ul li a').click();
});
