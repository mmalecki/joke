var joke = require('../')();

var i, N = 80000;

console.time('`joke.log(\'info\', \'foo bar\');`');
for (i = 0; i < N; i++) {
  joke.log('info', 'foo bar');
}
console.timeEnd('`joke.log(\'info\', \'foo bar\');`');

console.time('`joke.log(\'info\', \'foo bar\', { foo: \'bar\' });`');
for (i = 0; i < N; i++) {
  joke.log('info', 'foo bar', { foo: 'bar' });
}
console.timeEnd('`joke.log(\'info\', \'foo bar\', { foo: \'bar\' });`');

console.time('`joke.info(\'foo bar\');`');
for (i = 0; i < N; i++) {
  joke.info('foo bar');
}
console.timeEnd('`joke.info(\'foo bar\');`');

console.time('`joke.info(\'foo bar\'); joke.trace(\'trace\');`');
for (i = 0; i < N; i++) {
  joke.info('foo bar');
  joke.trace('trace');
}
console.timeEnd('`joke.info(\'foo bar\'); joke.trace(\'trace\');`');
