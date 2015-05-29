var contracts = require("../contracts");
var helper = require("../api-helper");

// http://developer.oanda.com/rest-live/accounts/
function Rates(service) {
  this._makeGet = helper.buildGetter(service);
}

Rates.prototype.list = function(options) {
  // TODO: Make work with authorization token where a username is not needed

  return this._makeGet("/v1/accounts", options);
};

Rates.prototype.info = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");

  // TODO: Make work with authorization token where a username is not needed

  return this._makeGet("/v1/accounts/" + options.accountId);
}

module.exports = Rates;
