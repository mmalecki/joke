var joke = require('../')();

joke
  .pipe(joke.stringify())
  .pipe(process.stdout);

joke.debug('Application starting!');
joke.info('Hello', { name: 'Maciej' });
joke.error('Ooopss...', { error: new Error('You broke it.') });
