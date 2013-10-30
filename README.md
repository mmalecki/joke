# joke
[![Build Status](https://travis-ci.org/mmalecki/joke.png)](https://travis-ci.org/mmalecki/joke)

Logging is a serious business.

## Usage

```js
var joke = require('joke')();
var net = require('net');

joke
  .pipe(joke.stringify())
  .pipe(process.stdout);

joke
  .pipe(joke.stringify())
  .pipe(net.connect({ host: 'localhost', port: 1337 }));

joke.debug('Application starting!');
joke.info('Hello', { name: 'Maciej' });
joke.error('Ooopss...', { error: new Error('You broke it.') });
```
