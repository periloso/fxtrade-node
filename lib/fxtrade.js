var restler       = require("restler");
var _             = require("underscore");
var sprintf       = require("sprintf-js").sprintf;

// API
var Rates         = require("./api/rates");
var Accounts      = require("./api/accounts");
var Orders        = require("./api/orders");
var Trades        = require("./api/trades");
var Positions     = require("./api/positions");
var Transactions  = require("./api/transactions");
var Labs          = require("./api/labs");
var Streaming     = require("./api/streaming");

var environments = {
  live:     "https://api-fxtrade.oanda.com/",
  practice: "https://api-fxpractice.oanda.com/",
  sandbox:  "http://api-sandbox.oanda.com/"
};

module.exports = restler.service(function() {
  if(arguments.length === 2 && _.isString(arguments[0]) && _.isString(arguments[1])) {
    // (environment, apiKey)

    var env = arguments[0].toLowerCase();

    if(["live", "practice"].indexOf(env) < 0) {
      throw new Error("Valid environments are ['live', 'practice', 'sandbox']");
    }

    this.baseURL = environments[env];
    this.apiToken = arguments[1];

    this.defaults.headers = {
      "authorization": "Bearer " + this.apiToken
    };
  } else if(arguments.length === 1 && _.isString(arguments[0]) && arguments[0].toLowerCase() === "practice") {
    // (environment = "practice")

    this.baseURL = environments["practice"];
  } else {
    // Invalid

    var envParam = "environments: ['live', 'practice', 'sandbox']";
    throw new Error(sprintf("Invalid arguments\n (%s, apiKey) or\n('practice')", envParam));
  }
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
