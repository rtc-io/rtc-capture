var capture = require('../..');
var extend = require('cog/extend');

module.exports = function(constraints, opts, callback) {
  return capture(extend({
    fake: true
  }, constraints), opts, callback);
};
