var contracts = require("../contracts");
var helper = require("../api-helper");

// http://developer.oanda.com/rest-live/rates/
function Rates(service) {
  this._makeGet = helper.actionBuilder("get", service);
}

Rates.prototype.instruments = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");

  return this._makeGet('/v1/instruments', options);
};

Rates.prototype.prices = function(options) {
  contracts.require(options, "options");
  contracts.require(options.instruments, "options.instruments");

  return this._makeGet('/v1/prices', options);
};

Rates.prototype.candles = function(options) {
  contracts.require(options, "options");
  contracts.require(options.instrument, "options.instrument");

  return this._makeGet('/v1/candles', options);
};

module.exports = Rates;
