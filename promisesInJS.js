let promiseToCleanTheRoom = new Promise(function(resolve, reject){
    // cleaning the room

    let isClean = true;
    if(isClean){
        resolve("The room is cleaned");
    }else{
        reject("The room is not Cleaned");
    }
});

//promise to clean the room is done by then, and catch method will give else part

promiseToCleanTheRoom.then(function(fromResolve){
    console.log(fromResolve);
}).catch(function(fromreject){
    console.log(fromreject);
});

////////////////////////////////////////////////////////////////////////////
let cleanRoom = function(){
    return new Promise(function(resolve, reject){
        resolve(" - Cleaned the room ");
    });
};

let removeGarbage = function(message){
    return new Promise(function(resolve, reject){
        resolve(message+" - removed garbage");
    });
};

let winIceCream = function(message){
    return new Promise(function(resolve, reject){
        resolve(message+" - won iceCream");
    });
}

// Promises solves the problem by independently resolve
// applying dependency
cleanRoom().then(function(result){
    return removeGarbage(result);
}).then(function(result){
    return winIceCream(result);
}).then(function(result){
    console.log("Finished: "+result)
});

Promise.all([cleanRoom(), removeGarbage(), winIceCream()])
.then(function(){
    console.log("ALL FINISHED");
});

Promise.race([cleanRoom(), removeGarbage(), winIceCream()])
.then(function(){
    console.log("ONE OF THEM FINISHED");
});