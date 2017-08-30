function Vehicle(make){
    this.make = make;
    this.drive = function(){
        return "Vehicle can run";
    }
}
function Car(model){
    this.model = model;
}
Car.prototype = new Vehicle(2017); // Car ISA Vehicle
Car.prototype.getInfo = function(){
    return this.make+" "+this.model+" camry.";
}

var car = new Car("Toyota");
console.log(car.getInfo());
console.log(car.drive());
