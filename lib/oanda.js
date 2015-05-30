var rest = require("restler");

var Rates = require("./api/rates");
var Accounts = require("./api/accounts");
var Orders = require("./api/orders");
var Trades = require("./api/trades");

OandaService = rest.service(function(baseURL, apiToken) {
  this.baseURL = baseURL;

  this.defaults.headers = {
    "authorization": "Bearer " + apiToken
  };
}, {
  // Options
}, {
  rates:     function() { return new Rates(this); },
  accounts:  function() { return new Accounts(this); },
  orders:    function() { return new Orders(this); },
  trades:    function() { return new Trades(this); }
});

module.exports = OandaService;
