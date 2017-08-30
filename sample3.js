// literal way OOP prototype

const dog = {
    name: 'canine',
    bark: function() {
        console.log('woof woof!')
    }
}

const pug = Object.create(dog);
// pug.__proto__ = dog;
pug.__proto__.dance = function(){
        console.log('pug can dance');
    }
// override bark() of dog
pug.__proto__.bark = function(){
    console.log("Pug ovverride woof woof !");
} 
pug.bark();
pug.dance();