const Koa = require('koa');

const app = new Koa();

const serve = require('koa-static')

const route = require('koa-route')

const Res = require('./utils/Response')

const main = serve('./static')

const routers = require('./api')

app.use(main);

const version = 'v1.0.0'

app.use(async (ctx,next)=>{
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
})

app.use(async (ctx,next)=>{
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time',`${ms}ms`)
})

// app.use(async ctx=>{
//   ctx.body = 'hello world !'
// })

// app.use(route.get('/query',ctx=>{
//   let res = {};
//   res.status = 200;
//   res.data = {list:[1,2,3,'askwan','boble']}
//   ctx.body = res;
// }))

// app.use(route.post('/update',ctx=>{
//   let res = new Res({title:123123});
//   ctx.body = res;
// }));

for(let key in routers){
  let routerCollection = routers[key];
  for(let name in routerCollection) {
    let router = routerCollection[name];
    app.use(route[router.method]('/'+version+router.path+'/'+name,ctx=>{
      router.fn(ctx);
    }))
  }
  
}


app.listen(3000,()=>{
  console.log('ready');
});