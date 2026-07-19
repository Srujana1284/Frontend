//Takes another function as an argument or returns a function as a result.
//HOF is a function that operates on other functions, either by taking them as arguments or by returning them.
function order(callprepare, callserve) {
    console.log("Order food");
    callprepare();
    callserve();
}

//Callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
// example of callback function is prepare and servecustomer functions which are passed as arguments to order function.
function prepare() {
    console.log("Preparation started");
}

function servecustomer() {
    console.log("Enjoy your food");
}

order(prepare, servecustomer);
//prepare();



//Greet
function greet(name) {
    console.log(`Hello, ${name}!`);
}

function processUser(name, callback) {
    callback(name);
}

processUser("Alice", greet); // Output: Hello, Alice!


// //HOF's
const numbers = [1, 2, 3, 4, 5, 6];


// Step 1: Double each number
const doubled = numbers.map(num => num * 2);


// Step 2: Keep only numbers greater than 5
const filtered = doubled.filter(num => num > 5);


// Step 3: Find the sum of remaining numbers
const total = filtered.reduce((sum, num) => sum + num, 0);


console.log("Doubled:", doubled);   // [2, 4, 6, 8, 10, 12]
console.log("Filtered:", filtered); // [6, 8, 10, 12]
console.log("Total:", total);