var contracts = require("../contracts");
var helper = require("../api-helper");

// http://developer.oanda.com/rest-live/rates/
function Rates(service) {
  this._makeGet = helper.buildGetter(service);
}

Rates.prototype.instruments = function(options) {
  contracts.require(options.accountId, "accountId");

  return this._makeGet('/v1/instruments', options);
};

Rates.prototype.prices = function(options) {
  contracts.require(options.instruments, "instruments");

  return this._makeGet('/v1/prices', options);
}

Rates.prototype.candles = function(options) {
  contracts.require(options.instrument, "instrument");

  return this._makeGet('/v1/candles', options);
}

module.exports = Rates;
