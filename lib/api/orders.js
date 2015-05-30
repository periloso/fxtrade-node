var contracts = require("../contracts");
var helper = require("../api-helper");

// http://developer.oanda.com/rest-live/orders/
function Orders(service) {
  this._makeGet = helper.actionBuilder("get", service);
  this._makePost = helper.actionBuilder("post", service);
  this._makePatch = helper.actionBuilder("patch", service);
  this._makeDelete = helper.actionBuilder("delete", service);
}

Orders.prototype.list = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");

  return this._makeGet("/v1/accounts/:accountId/orders", options);
};

Orders.prototype.create = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");
  contracts.require(options.instrument, "options.instrument");
  contracts.require(options.units, "options.units");
  contracts.require(options.side, "options.side");
  contracts.require(options.type, "options.type");

  if(["limit", "stop", "marketIfTouched"].indexOf(options.type) >= 0) {
    contracts.require(options.expiry, "options.expiry");
    contracts.require(options.price, "options.price");
  }

  return this._makePost("/v1/accounts/:accountId/orders", options);
};

Orders.prototype.modify = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");
  contracts.require(options.orderId, "options.orderId");

  return this._makePatch("/v1/accounts/:accountId/orders/:orderId", options);
};

Orders.prototype.close = function(options) {
  contracts.require(options, "options");
  contracts.require(options.accountId, "options.accountId");
  contracts.require(options.orderId, "options.orderId");

  return this._makeDelete("/v1/accounts/:accountId/orders/:orderId", options);
};

module.exports = Orders;
