var contracts = require("../contracts");
var helper = require("../api-helper");

// http://developer.oanda.com/rest-live/accounts/
function Accounts(service) {
  this._makeGet = helper.actionBuilder("get", service);
}

Accounts.prototype.list = function(options) {
  return this._makeGet("/v1/accounts", options);
};

Accounts.prototype.info = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");

  return this._makeGet("/v1/accounts/:accountId", options);
};

module.exports = Accounts;
