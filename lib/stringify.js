var Transform = require('stream').Transform;
var util = require('util');

var Stringify = module.exports = function () {
  if (!(this instanceof Stringify)) {
    return new Stringify();
  }

  Transform.call(this, { objectMode: true });
};
util.inherits(Stringify, Transform);

Stringify.prototype._transform = function (chunk, _, cb) {
  this.push(JSON.stringify(chunk) + '\n');
  cb();
};
