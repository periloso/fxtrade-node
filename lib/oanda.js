var restler       = require("restler");

var Rates         = require("./api/rates");
var Accounts      = require("./api/accounts");
var Orders        = require("./api/orders");
var Trades        = require("./api/trades");
var Positions     = require("./api/positions");
var Transactions  = require("./api/transactions");
var Labs          = require("./api/labs");
var Streaming     = require("./api/streaming");

OandaService = restler.service(function(baseURL, apiToken) {
  this.baseURL = baseURL;
  this.apiToken = apiToken;

  this.defaults.headers = {
    "authorization": "Bearer " + apiToken
  };
}, {
  // Options
}, {
  rates:        function() { return new Rates(this);        },
  accounts:     function() { return new Accounts(this);     },
  orders:       function() { return new Orders(this);       },
  trades:       function() { return new Trades(this);       },
  positions:    function() { return new Positions(this);    },
  transactions: function() { return new Transactions(this); },
  labs:         function() { return new Labs(this);         },
  streaming:    function() {
    // Doesn't use restler
    return new Streaming({
      baseURL: this.baseURL,
      apiToken: this.apiToken
    });
  }
});

module.exports = OandaService;
