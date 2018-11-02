const EventEmitter = require('events');

let dispatch = new EventEmitter();

setTimeout(() => {
  dispatch.emit('sayHello',{name:789});
}, 1500);

module.exports = dispatch;