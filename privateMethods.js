function makeCounter() {
    
    var privateCounter = 0; //private data
    function changeBy(val) { //private inner function
    
    privateCounter += val;
    
    }
    return { // three public functions are closures
    increment: function() { changeBy(1); },
    decrement: function() { changeBy(-1); },
    value: function() { return privateCounter; }
    
    }
    
    };
    var counter1 = new makeCounter();
    console.log(counter1.value());