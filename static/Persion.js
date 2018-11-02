function Person(options){
  this.name = options.name;
  this.age = options.age;
}

Person.prototype = {
  getName(){
    return this.name;
  }
}

export default Person