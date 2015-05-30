var expect = require('chai').expect;
var fxtrade = require('../lib/fxtrade');

describe("oanda module.exports", function() {
  it("should not be null", function() {
    expect(fxtrade).not.to.be.null;
  })
});
