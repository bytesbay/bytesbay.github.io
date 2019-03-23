window.axios = require('axios');
axios.defaults.baseURL = 'http://localhost:8000';
axios.interceptors.response.use(res => {
  return res;
}, err => {
  return Promise.reject(err.response);
});
axios.defaults.timeout = 5000;

if(!Element.prototype.triggerEvent) {
  Element.prototype.triggerEvent = function (eventName) {
    var event;

    if (document.createEvent) {
      event = document.createEvent("HTMLEvents");
      event.initEvent(eventName, true, true);
    } else {
      event = document.createEventObject();
      event.eventType = eventName;
    }

    event.eventName = eventName;
    if (document.createEvent) {
      this.dispatchEvent(event);
    } else {
      this.fireEvent("on" + event.eventType, event);
    }
  };
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
