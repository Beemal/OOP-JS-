// literal ways to generate  a key value pairs
var vehicle = {
    model:"2017"
}
var car = {
    make: "Toyota",
   
}

car.prototype= vehicle;
var c = Object.create(car);
console.log(car);
car.prototype.getInfo=function(){
    return this.make+" "+this.prototype.model;
  };
console.log(car.getInfo);
console.log(c);
console.log(c.make);//toyota
console.log(c.prototype);//vehicle
console.log(c.prototype.model);//2017