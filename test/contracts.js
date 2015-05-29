var should = require('chai').should();
var expect = require('chai').expect;

var contracts = require('../lib/contracts');

describe("#require", function() {
  it("should throw error for null and undefined", function() {
    expect(contracts.require.bind(contracts, null, "null")).to.throw(Error);
    expect(contracts.require.bind(contracts, void(0), "undefined")).to.throw(Error);
  });
});
