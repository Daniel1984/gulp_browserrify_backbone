(function() {

  "use strict";

  var BB = require('../../helpers/base_bb_view'),
      template = require('../../templates/screen/main.hbs');

  module.exports = BB.View.extend({

    initialize: function() {
      this.someInfo();
    },

    render: function() {
      this.$el.html(template({ test: 'daniel apps 55577788' }));
      return this;
    }

  });

})();
