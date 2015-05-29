var should = require('chai').should();
var oanda = require('../lib/oanda');

describe('#version', function() {
  it('should be 1.0.0', function() {
    oanda.version.should.equal('1.0.0');
  });
});
