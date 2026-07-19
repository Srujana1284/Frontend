// Closure returns a function as 

function outer() {
    var a = 3;
    function inner() {
        console.log(a);
    }
    inner();
}
outer(); // Output: 3



function outer() {
    var a = 3;
    return function inner() {
        console.log(a);
    }
}
console.log(outer()); // [Function: inner]