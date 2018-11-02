const path = require('path');
const Response = require('../../utils/Response')
let str = '/api/'+path.parse(__dirname).name;
module.exports = {
  method:'get',
  path:str,
  fn(ctx){
    ctx.body = new Response('get my article')
  },
}