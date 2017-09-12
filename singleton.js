// object creating is the same way like with constructor way
// there is new keyword that define a function and invike it at the same time
var apple = new function() {
    this.type = "mac";
    this.color = "silver";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}
apple.color = "White";
console.log(apple.getInfo());

// Its an option -- when we really want a constructor function that 
// we can use only once and there's no sense of giving it a name

// custom way 
var singleton = (function(){
    var instance;
    function createInstance(){
        var object = new Object("I am a new Object");
        return object;
    }
    return{
        getInstance:function(){             // getInstance function is gatekeeper, it only returns one
                                            //  and only instance  of Singleton class
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    };
})();

(function run(){
    var instance1 = singleton.getInstance();
    var instance2 = singleton.getInstance();
    console.log(instance1 === instance2);  // true ; because we get the same instance not the different instance
})();

