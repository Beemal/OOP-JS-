function Person(name, age){
    this.name = name;
    this.age = age;
}
var p = new Person("Bimal",25);
Person.prototype.getInfo = function(){
    return this.name+'--'+this.age;
}
console.log(p.getInfo());








