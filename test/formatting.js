var should = require('chai').should();
var formatting = require('../lib/formatting');

describe("#encode", function() {
  it("should convert [\"EUR_USD\"] to \"EUR_USD\"", function() {
    formatting.encode(["EUR_USD"]).should.equal("EUR_USD");
  });

  it("should convert [\"EUR_USD\", \"EUR_AUD\"] to \"EUR_USD,EUR_AUD\"", function() {
    formatting.encode(["EUR_USD", "EUR_AUD"]).should.equal("EUR_USD,EUR_AUD");
  });

  it("should convert \"EUR_USD\" to \"EUR_USD\"", function() {
    formatting.encode("EUR_USD").should.equal("EUR_USD");
  });

  it("should convert null to null", function() {
    should.equal(formatting.encode(null), null);
  });

  it("should convert { arr: [\"EUR_USD\", \"EUR_AUD\"], str: \"test\", num: 123 } to " +
     "{ arr: \"EUR_USD,EUR_AUD\", str: \"test\", num: 123}", function() {

       var obj = {
         arr: ["EUR_USD", "EUR_AUD"],
         str: "test",
         num: 123
       };

       formatting.encode(obj).should.deep.equal({
         arr: "EUR_USD,EUR_AUD",
         str: "test",
         num: 123
       });
     });
});
