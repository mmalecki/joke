var net = require('net');
var joke = require('../')();

joke
  .pipe(joke.stringify())
  .pipe(net.connect({ host: 'localhost', port: 1337 }));

joke.debug('Application starting!');
joke.info('Hello', { name: 'Maciej' });
joke.error('Ooopss...', { error: new Error('You broke it.') });
