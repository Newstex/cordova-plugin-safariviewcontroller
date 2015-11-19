var exec = require("cordova/exec");
var channel = require("cordova/channel");

var channels = {
  exit: channel.create('exit')
};

module.exports = {
  isAvailable: function (onSuccess, onError) {
    exec(onSuccess, onError, "SafariViewController", "isAvailable", []);
  },
  show: function (options, onSuccess, onError) {
    exec(onSuccess, onError, "SafariViewController", "show", [options]);
  },
  hide: function (onSuccess, onError) {
    exec(onSuccess, onError, "SafariViewController", "hide", []);
  },
  addEventListener: function (eventname,f) {
    if (eventname in channels) {
      channels[eventname].subscribe(f);
    }
  },
  removeEventListener: function(eventname, f) {
    if (eventname in channels) {
      channels[eventname].unsubscribe(f);
    }
  }
};