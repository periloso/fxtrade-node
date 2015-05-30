var contracts = require("../contracts");
var helper = require("../api-helper");

// http://developer.oanda.com/rest-live/trades/
function Trades(service) {
  this._makeGet = helper.actionBuilder("get", service);
  this._makePatch = helper.actionBuilder("patch", service);
  this._makeDelete = helper.actionBuilder("delete", service);
}

Trades.prototype.list = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");

  return this._makeGet("/v1/accounts/:accountId/trades", options);
};

Trades.prototype.info = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");
  contracts.require(options.accountId, "options.tradeId");

  return this._makeGet("/v1/accounts/:accountId/trades/:tradeId", options);
};

Trades.prototype.modify = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");
  contracts.require(options.accountId, "options.tradeId");

  return this._makePatch("/v1/accounts/:accountId/trades/:tradeId", options);
};

Trades.prototype.close = function (options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");
  contracts.require(options.accountId, "options.tradeId");

  return this._makeDelete("/v1/accounts/:accountId/trades/:tradeId", options);
}

module.exports = Trades;
