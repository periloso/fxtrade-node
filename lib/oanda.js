var rest = require("restler");

var Rates = require("./api/rates");
var Accounts = require("./api/accounts");

OandaService = rest.service(function(baseURL, apiToken) {
  this.baseURL = baseURL;

  this.defaults.headers = {
    "authorization": "Bearer " + apiToken
  };
}, {
  // Options
}, {
  rates: function() { return new Rates(this); },
  accounts: function() { return new Accounts(this); }
});

module.exports = OandaService;
