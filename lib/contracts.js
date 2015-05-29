module.exports = {
  require: function(value, name) {
    if(!value) {
      if(name) {
        throw new Error("<" + name + "> is required and must have a value");
      } else {
        throw new Error("A value is required and must have a value");
      }
    }
  }
};
