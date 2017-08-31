function Vehicle(make){
    this.make = make;
    this.drive = function(){
        return "Vehicle can run";
    }
    this.start = function(){
        return "Car can Start";
    }
}
function Car(model){
    this.model = model;
}
Car.prototype = new Vehicle(2017); // Car ISA Vehicle
Car.prototype.getInfo = function(){
    return this.make+" "+this.model+" camry.";
}
//Override a  drive method in car 
Car.prototype.drive = function(){
    return "Camry can run fast";
}

//Override a start method in Car
Car.prototype.start = function(){
    return "Camry Car can START";
}
var car = new Car("Toyota");
console.log(car.getInfo());

console.log(car.drive());
console.log(car.start());

console.log(car instanceof Car);
console.log(car instanceof Vehicle);



// var v = Vehicle(2018);
// var ve = new Vehicle(2019);
// console.log(ve instanceof Vehicle);
// console.log(v instanceof Vehicle);
