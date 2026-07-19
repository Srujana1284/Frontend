//Function declaration
function greet() {
    console.log("Hello World");
};
greet();

//Function Expression
let greet1 = function() {
        console.log("Hello Everyone");
};
greet1();


//Arrow functiom
let greet2 = () => console.log("Hello Everyone from Arrow Expression ");
greet2();

//IIFE - Immediately Invoked function Expression(Anonymous function)
(function() {   
console.log("Hello Everyone from IIFE! ");
})();