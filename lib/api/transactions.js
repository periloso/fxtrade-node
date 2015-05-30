var Promise = require("promise");
var Download = require('download');

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

  return new Promise(function(resolve, reject) {
    this._makeGet("/v1/accounts/:accountId/alltransactions", options, function(result, response) {
      if(response.statusCode === 404) { // File is not ready yet
        this.retry(1000);
      } else if(response.headers.location) { // Download JSON file
        var jsonZipUrl = response.headers.location;

        new Download({ mode: '755', extract: true })
          .get(jsonZipUrl)
          .run(function (err, files) {
            var jsonString = files[0].contents.toString("utf-8");
            resolve(JSON.parse(jsonString));
          });
      } else {
        reject(result);
      }
    });
  }.bind(this));
};

module.exports = Transactions;
