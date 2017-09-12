//callBack fn is a function into a function as an argument

let add = function(a,b){
    return a+b;
}
let multiply = function(a,b){
    return a*b;
}
let simplyDisplay = function(a,b){
    console.log(`here are the two numbers - ${a} and ${b}.`);
}
let calculate = function(num1, num2, callback){
   return callback(num1,num2);
}

console.log(calculate(5,10,add));
console.log(calculate(5,10,multiply));
console.log(calculate(5,10,simplyDisplay));

console.log(calculate(5,10, function(a,b){return a-b;})); // anonymous function
