var contracts = require("../contracts");
var helper = require("../api-helper");

// http://developer.oanda.com/rest-live/forex-labs/
function Labs(service) {
  this._makeGet = helper.actionBuilder("get", service);
}

Labs.prototype.calendar = function(options) {
  contracts.require(options, "options");
  contracts.require(options.period, "options.period");

  return this._makeGet("/labs/v1/calendar", options);
};

Labs.prototype.historicalPositionRatios = function(options) {
  contracts.require(options, "options");
  contracts.require(options.instrument, "options.instrument");
  contracts.require(options.period, "options.period");

  return this._makeGet("/labs/v1/historical_position_ratios", options);
};

Labs.prototype.spreads = function(options) {
  contracts.require(options, "options");
  contracts.require(options.instrument, "options.instrument");
  contracts.require(options.period, "options.period");

  return this._makeGet("/labs/v1/spreads", options);
};

Labs.prototype.commitmentsOfTraders = function(options) {
  contracts.require(options, "options");
  contracts.require(options.instrument, "options.instrument");

  return this._makeGet("/labs/v1/commitments_of_traders", options);
};

Labs.prototype.orderbook = function(options) {
  contracts.require(options, "options");
  contracts.require(options.instrument, "options.instrument");
  contracts.require(options.period, "options.period");

  return this._makeGet("/labs/v1/orderbook_data", options);
};

Labs.prototype.autochartist = function(options) {
  return this._makeGet("/labs/v1/signal/autochartist", options);
};

module.exports = Labs;
