(function() {
  "use strict";
  var BB = require('./base_bb');

  BB.View.prototype.someInfo = function() {
    console.log('some info helper method');
  };

  module.exports = BB;

})();
