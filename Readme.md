
# delegate-dom

  Low-level event delegation library.

## Install

    $ npm install delegate-dom

## Example

```js
var delegate = require('delegate-dom')

delegate.on(document.body, 'ul li a', 'click', function self (e) {
  delegate.off(document.body, 'click', self);
})
```

## License

  MIT
