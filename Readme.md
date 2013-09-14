
# delegate

  Low-level event delegation library.

## Installation

    $ npm install delegate-dom

## Example

```js
delegate = require('delegate')

fn = delegate.on(document.body, 'ul li a', 'click', function (e) {
  delegate.off(document.body, 'click', fn);
})
```

## License

  MIT
