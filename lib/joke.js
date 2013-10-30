var util = require('util');
var Readable = require('stream').Readable;
var Stringify = require('./stringify');

var Joke = module.exports = function (options) {
  if (!(this instanceof Joke)) {
    return new Joke(options);
  }

  options = options || {};
  this.level = options.level || 'info';
  this._levels = options.levels || {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  };
  this._buildLevels();

  Readable.call(this, { objectMode: true });
};
util.inherits(Joke, Readable);

Joke.prototype._buildLevels = function () {
  var levels = this._levels,
      self = this;

  Object.keys(levels).forEach(function (key) {
    self[key] = function (msg, data) {
      self.log(key, msg, data);
    };
  });
};

Joke.prototype.log = function (level, msg, data) {
  var l = this._levels[level];
  if (!l) {
    throw new Error('Invalid log level: ' + level);
  }

  if (l >= this._levels[this.level]) {
    this.push({
      level: level,
      message: msg,
      time: new Date(),
      meta: data
    });
  }
};

// streams2 is a fucking joke.
Joke.prototype._read = function () {};

Joke.prototype.stringify = function () {
  return new Stringify();
};

Joke.stringify = Stringify;
