var obj = {num: 5};
// var b = {num: 10};

var myMethod = function(a,b,c){
    return this.num + a + b + c;
}
console.log(myMethod.call(obj, 21, 10, 20));

var array = [21,10,20];
console.log(myMethod.apply(obj, array));

var bound = myMethod.bind(obj);
// console.dir(bound);        // function bound with myMethod 
console.log(bound(21,10,20));