const path = require('path');
let str = '/api/'+path.parse(__dirname).name;

module.exports = {
  method:'get',
  fn(ctx){
    ctx.body = 'login+askwan';
  },
  path:str
}