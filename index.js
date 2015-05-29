var Oanda = require("./lib/oanda");

var test = new Oanda('https://api-sandbox.oanda.com/');

test.rates().candles({
  "instrument": "EUR_USD"
}).on('complete', function(result, response) {
  console.log(result);
});

module.exports = Oanda;
