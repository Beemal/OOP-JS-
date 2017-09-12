function makeGreeting(language){

    //closure function 
    return function(firstname, lastname){
        if(language === "en")
            console.log("Hello "+firstname+" "+lastname);
        if(language === "es")
            console.log("Hola "+firstname+" "+lastname);
    }
}

var greetEnglish = makeGreeting("en"); // greetEnglish is function with en language
var greetSpanish = makeGreeting("es"); // greetSpanish is function with es language

greetEnglish("Bimal","Parajuli");
greetSpanish("Bimal","Parajuli");