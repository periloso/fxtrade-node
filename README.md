# OANDA fxTrade Node API
A simple API for interacting with [OANDA's fxTrade platform](http://developer.oanda.com/rest-live/development-guide/).

### Installtion
> npm install fxtrade

### Usage
All the fxTrade REST API's are supported except for the streaming API.

*Basic Usage*
```javascript
var FxTrade = require("fxtrade");

// Practice
var API_KEY = "<Your OANDA FxTrade API KEY>";

var fxTrade = new FxTrade('practice', API_KEY);

fxTrade.trades().list({
  accountId: "12345"
}).then(function(data) {
  console.log(data);
}).catch(function(error) {
  console.log("Error: ", error);
});
```

The API follows the syntax of `fxTrade.<API Group>().<Action>(params)`. And each action returns a promise as outlined at [https://www.promisejs.org](https://www.promisejs.org). The parameters to each action are the parameters as outlined in the [fxTrade documentation](http://developer.oanda.com/rest-live/development-guide/). All parameters are camelcased thus when the OANDA documentation lists as parameter using underscores (e.g. `account_id`) it should be passed as `accountId` in your code.

#### API Groups and Actions
- `accounts` - [http://developer.oanda.com/rest-live/accounts/](http://developer.oanda.com/rest-live/accounts/)
  - `list` - List the accounts.
  - `info` - Get info for a specific account.
- `labs` - [http://developer.oanda.com/rest-live/forex-labs/](http://developer.oanda.com/rest-live/forex-labs/)
  - `calendar` - Important calendar events.
  - `historicalPositionRatios` - Historical Position Ratios for an instrument.
  - `spreads` - Spread for an instrument.
  - `commitmentsOfTraders` - Commitments of Traders for an instrument.
  - `orderbook` - The orderbook for an instrument.
  - `autochartist` - Autochartist signals.
- `orders` - [http://developer.oanda.com/rest-live/orders/](http://developer.oanda.com/rest-live/orders/)
  - `list` - List the orders for an account.
  - `create` - Create a new order.
  - `modify` - Modify an existing order.
  - `close` - Clost an order.
- `positions` - [http://developer.oanda.com/rest-live/positions/](http://developer.oanda.com/rest-live/positions/)
  - `list` - List the positions of an account.
  - `instrument` - Get the position for an instrument.
  - `close` - Close a position.
- `rates` - [http://developer.oanda.com/rest-live/rates/](http://developer.oanda.com/rest-live/rates/)
  - `instruments` - List available instruments for an account.
  - `prices` - Fetch live prices for an instrument.
  - `candles` - Fetch histroical information for an instrument.
- `trades` - [http://developer.oanda.com/rest-live/trades/](http://developer.oanda.com/rest-live/trades/)
  - `list` - List current trades for an account.
  - `info` - Get info on a specific trade.
  - `modify` - Modify an existing trade.
  - `close` - Close a trade.
- `transactions` - [http://developer.oanda.com/rest-live/transaction-history/](http://developer.oanda.com/rest-live/transaction-history/)
  - `list` - List account transactions.
  - `info` - Get the info on a specific transaction.
  - `all` - List all account transactions.

**Example Code**
```javascript
var FxTrade = require("./index"); // FxTrade entry

// Practice
var API_KEY = "<Your OANDA FxTrade API KEY>";

var fxTrade = new FxTrade('practice', API_KEY);

fxTrade.labs().calendar({
  period: 2592000,
  instrument: "EUR_USD"
}).then(function(data) {
  console.log(data);
}).catch(function(error) {
  console.log("Error: ", error);
});

fxTrade.accounts().info({
  accountId: "4012914",
}).then(function(data) {
  console.log(data);
}).catch(function(error) {
  console.error("ERROR: ", error);
});
```

**TODO**
- Streaming API
- More Unit Testing

#### Disclaimer
IN NO EVENT SHALL THE AUTHOR OF THIS LIBRARY BE LIABLE FOR ANY LOSS OF MONEY, SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
