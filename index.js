const vm = require('./event');
const static = require('./module')

const ajax = ()=>{
  console.log('ajax');
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(456)
    }, 3000);
  })
}

const getData = async ()=>{
  console.log(__dirname);
  let r1 = await ajax();
  console.log(r1);
  console.log(__filename)
}

vm.on('sayHello',(obj)=>{
  console.log(obj);
})

console.log(static)
// console.log(module.filename)

// getData();