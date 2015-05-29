var rest = require("restler");

var Rates = require("./api/rates");
var Accounts = require("./api/accounts");

OandaService = rest.service(function(baseURL) {
  this.baseURL = baseURL;
}, {
  // Options
}, {
  rates: function() { return new Rates(this); },
  accounts: function() { return new Accounts(this); }
});

module.exports = OandaService;
