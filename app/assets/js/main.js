(function() {
  "use strict";

  var App = require('./views/screen/main'),
      $ = require('zepto-browserify').$;

  var app = {

    initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
      $('.app').html(new App().render().el);
    }

  };

  app.initialize();

})();
