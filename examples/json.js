var es = require('event-stream'),
    util = require('util'),
    joke = require('../')();

joke
  .pipe(es.mapSync(JSON.stringify))
  .pipe(es.join('\n'))
  .pipe(process.stdout);

joke.debug('Application starting!');
joke.info('Hello', { name: 'Maciej' });
joke.error('Ooopss...', { error: new Error('You broke it.') });
