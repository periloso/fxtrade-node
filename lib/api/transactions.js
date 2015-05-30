var contracts = require("../contracts");
var helper = require("../api-helper");

// http://developer.oanda.com/rest-live/transaction-history/
function Transactions(service) {
  this._makeGet = helper.actionBuilder("get", service);
  this._makeDelete = helper.actionBuilder("delete", service);
}

Transactions.prototype.list = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");

  return this._makeGet("/v1/accounts/:accountId/transactions", options);
};

Transactions.prototype.info = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");
  contracts.require(options.accountId, "options.transactionId");

  return this._makeGet("/v1/accounts/:accountId/transactions/:transactionId", options);
};

Transactions.prototype.all = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");

  // TODO: Download the zip json and return that
  throw new Error("Not Implemented");

  return this._makeGet("/v1/accounts/:accountId/alltransactions", options);
};

module.exports = Transactions;
