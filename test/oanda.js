var expect = require('chai').expect;
var oanda = require('../lib/oanda');

describe("oanda module.exports", function() {
  it("should not be null", function() {
    expect(oanda).not.to.be.null;
  })
});
