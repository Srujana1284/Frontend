/* try {

}
catch () {
    
}   
*/
console.log("Program started");
// let a = 10/2;
try {
let a = 10/b; //b is not defined, it will throw an error and the program will stop executing further lines of code.
throw new Error("b is not declared"); // we can throw our own custom error message using throw keyword and Error constructor.
console.log(a);
}catch (error) {
    console.log("An error occurred and been handled: " + error.message);
}
finally {
    console.log("Program ended");
}


//throw
let age = 2;
try {
if (age <  18) {
    throw new Error("Age must be greater than 18, not eligible");
} 
}
catch (e) {
    console.log(e.message);
}
finally {
    console.log("Thank you");
}
