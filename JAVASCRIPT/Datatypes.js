//Primitive 
//Number
//Dynamically typed Programming language
let a = 10;
console.log(typeof a,a); //number 10

//if let was int and a is hello it would throw error 
//as js is dynamically typed pgm lang v can change during runtime

a = "Hello"
console.log(typeof a,a) // string Hello

//Javascript-loosely typed programming language as semicolon; is not neceessary at end
//but muliple statems are there in 1 line; is necessay otherwiseerror crct ex- const pi = 3.14;console.log(typeof b, b) 
let b = 3.16
const pi = 3.14;console.log(typeof b, b) //number 3.16

//String- enclosed in "",'',``
let str = "ankit" //for char also we use string str='a'
console.log(str, typeof str)// a string
//My name is a aged around 10 , pi value is 3.14
console.log("My name is " + str + " aged around " + a + ", pi value is " + pi)
console.log("My name is" , str) //automatically takes one space

//ES6 string literals $(pi)-->gives value of pi
console.log(`My name is ${str} aged around ${a} , pi value is ${pi}`)

//boolean
let isvalid = true; 
console.log(typeof isvalid, isvalid) // boolean true

//undefined-declare var without initializing
let name;
console.log(name) //undefined

let z = 10/0; //Infinity
z = 0/10; //0
z = -10/0; //-Infinity
z = 0/0; //Nan(Not a number)
console.log(z); 

//null-u dont know wt to store & dont want it to be undefined
let payment = null;
console.log(payment);


//bigint - define huge number by suffix n
let g = 100n;
console.log(typeof g, g); //bigint 100n

//symbol
let x =Symbol("user");
console.log(x); //Symbol(user)
console.log(typeof x); //symbol

//COMPLEX DATA TYPES
//Array - []
let arr = [1, 2, 3];
console.log(arr); // Array(3)0: 11: 22: 3length: 3[[Prototype]]: Array(0)
console.log(arr[1]) //2


//Object - {key: value}
let person = {
    name: "Alice",
    age: 30
};
console.log(person.name); //Alice
console.log(person.age); //30
console.log(Object.keys(person)); //Array(2)0: "name"1: "age"length: 2[[Prototype]]: Array(0)
console.log(person) //Object age: 30 name: "Alice"[[Prototype]]: Object


//function
function add() {
    c = 3 + 3;
    console.log(c);
}
add() //6