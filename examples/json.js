var es = require('event-stream'),
    util = require('util'),
    joke = require('../')();

function inspect(obj) {
  return util.inspect(obj, { colors: true });
}

joke
  .pipe(es.mapSync(inspect))
  .pipe(es.join('\n'))
  .pipe(process.stdout);

joke.debug('Application starting!');
joke.info('Hello', { name: 'Maciej' });
joke.error('Ooopss...', { error: new Error('You broke it.') });
