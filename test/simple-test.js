var assert = require('assert');
var joke = require('../');
var logger = joke();
var logs = [];

logger.on('data', function (log) {
  logs.push(log);
  assert(log.message && log.level && log.meta);
});

process.on('exit', function () {
  assert.equal(logs[0].message, 'This is info');
  assert.equal(logs[0].level, 'info');
  assert.deepEqual(logs[0].meta, { hello: 'world' });

  assert.equal(logs[1].message, 'This is warn');
  assert.equal(logs[1].level, 'warn');
  assert.deepEqual(logs[1].meta, { hello: 'warn' });

  assert.equal(logs[2].message, 'You broke it!');
  assert.equal(logs[2].level, 'error');
  assert.deepEqual(logs[2].meta, { hello: 'error' });
});

logger.debug('I shouldn\'t show up anywhere!');
logger.info('This is info', { hello: 'world' });
logger.log('warn', 'This is warn', { hello: 'warn' });
logger.trace('Neither should I...');
logger.error('You broke it!', { hello: 'error' });
