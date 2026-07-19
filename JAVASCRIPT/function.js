//add 2 numbers - declare
function add() {
    let c = 10 + 20;
    console.log(c); //30
}
add() //call function

//square of num
function square() {
    let num = 2;
    let res = num * num;
    console.log(res); //4
}
square();

//Area and perimeter of a c circle
function circle() {
    let r = 3;
    let perimeter = 2 * 3.14 * r;
    let area = 3.14 * r * r;
    console.log(area);
    console.log(perimeter);
}circle();


//Function to find Simple Interest
function SimpleInterest() {

}

//Function to find sqaure of number
//1. w/o i/p & o/p
function square() {
    let num = 2;
    let res = num * num;
    console.log(res); //4
}square();

//2 with i/p & w/o o/p
function sqaure1(num) {
    let res = num * num;
    console.log(res); //16
}sqaure1(4);

//3 w/o i/p witth o/p
function sqaure2() {
    let num = 6;
    return num * num;
}
console.log(sqaure2());

//4. with i/p and o/p
function square3(num) {
    return num * num;
}
let res = square3(3)
console.log(`The square of  number is ${res}`);


function square4(num) {
    return num * num;
}
let num = 7;
let result = square4(num)
console.log(`The square of the ${num} is ${result}`);


//4 types finding area of a rectangle