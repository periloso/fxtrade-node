var _ = require("underscore");

module.exports = {
  /**
   * Convert a data structure to one that is appropriate
   * for the api specifications.
   */
  encode: function encode(data) {
    if(_.isArray(data)) {
      return data.join(",");
    } else if (_.isObject(data)) {
      for(var key in data) {
        data[key] = encode(data[key]);
      }

      return data;
    } else {
      return data;
    }
  }
};
