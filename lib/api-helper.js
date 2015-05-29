var formatting = require("./formatting");

module.exports = {
  buildGetter: function(service) {
    return function(url, query) {
      return service.get(url, {
        query: formatting.encode(query)
      });
    }
  }
};
