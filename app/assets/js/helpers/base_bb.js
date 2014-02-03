(function() {
  "use strict";
  var BB = require('backbone'),
      $ = require('zepto-browserify').$;
  BB.$ = $; //link to zepto for bb dependency

  module.exports = BB;
})();
