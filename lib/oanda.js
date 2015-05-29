var rest = require("restler");

var Rates = require("./api/rates");

OandaService = rest.service(function(baseURL) {
  this.baseURL = baseURL;
}, {
  // Options
}, {
  rates: function() { return new Rates(this); }
});

module.exports = OandaService;
