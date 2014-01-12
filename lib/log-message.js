var LogMessage = module.exports = function (level, msg, time, meta) {
  this.level = level;
  this.message = msg;
  this.time = time;
  this.meta = meta;
};

LogMessage.prototype.level = null;
LogMessage.prototype.message = null;
LogMessage.prototype.time = null;
LogMessage.prototype.meta = null;
