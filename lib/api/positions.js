var contracts = require("../contracts");
var helper = require("../api-helper");

// http://developer.oanda.com/rest-live/positions/
function Positions(service) {
  this._makeGet = helper.actionBuilder("get", service);
  this._makeDelete = helper.actionBuilder("delete", service);
}

Positions.prototype.list = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");

  return this._makeGet("/v1/accounts/:accountId/positions", options);
};

Positions.prototype.instrument = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");
  contracts.require(options.accountId, "options.instrument");

  return this._makeGet("/v1/accounts/:accountId/positions/:instrument", options);
};

Positions.prototype.close = function (options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");
  contracts.require(options.accountId, "options.instrument");

  return this._makeDelete("/v1/accounts/:accountId/positions/:instrument", options);
};

module.exports = Positions;
