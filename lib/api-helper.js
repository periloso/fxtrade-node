var Promise = require("promise");

var formatting = require("./formatting");

function urlify(url, options) {
  if(url.indexOf(":") >= 0) {
    url = url.replace(/:(\w*)/g, function(match, key) {
      var value = options[key];
      delete options[key];
      return value;
    });
  }

  return url;
}

function selectMethod(action, service, url, options) {
  var options = formatting.encode(options);

  switch(action.toLowerCase()) {
    case "get":     return service.get(url, { query: options });
    case "post":    return service.post(url, { data: options });
    case "patch":   return service.patch(url, { data: options });
    case "delete":  return service.patch(url);
    default:        throw new Error("Unknown action [" + action + "]");
  }
}

module.exports = {
  actionBuilder: function(action, service) {
    return function(url, options) {
      var urlified = urlify(url, options);
      var actionMethod = selectMethod(action, service, urlified, options);

      return new Promise(function(resolve, reject) {
        actionMethod.on("success", resolve);
        actionMethod.on("fail", reject);
        actionMethod.on("error", reject);
      });
    }
  }
};
