
let a = 10;
let b = 5;

document.writeln("Arithmetic operator");
document.writeln("<br>");
document.writeln(a + b);
document.writeln("<br>");
document.writeln(a - b);
document.writeln("<br>");
document.writeln(a * b);
document.writeln("<br>");
document.writeln(a / b);
document.writeln("<br>");
document.writeln(a % b);
document.writeln("<br>");
document.writeln(a ** b);
document.writeln("<br>");
document.writeln(++a);
document.writeln("<br>");
document.writeln(--b);
document.writeln("<br>");

let x = 8;
document.writeln(x++);
document.writeln(x);
document.writeln("<br>");

let y = 4;
document.writeln(y--);
document.writeln(y);
document.writeln("<br>");

document.writeln("Assignment operators");
document.writeln("<br>");
let c = 5;
document.writeln(c);
document.writeln("<br>");
document.writeln(c += 3); // c = c + 3
document.writeln("<br>");
document.writeln(c -= 3); // c = c - 3
document.writeln("<br>");
document.writeln(c *= 3); // c = c * 3
document.writeln("<br>");
document.writeln(c /= 3); // c = c / 3
document.writeln("<br>");
document.writeln(c %= 3); // c = c % 3
document.writeln("<br>");

document.writeln("Relational operators");
document.writeln("<br>");
let m = 5;
let n = "5";
document.writeln(m == n);
document.writeln("<br>");
document.writeln(m === n);
document.writeln("<br>");
document.writeln(m != n);
document.writeln("<br>");
document.writeln(m !== n);
document.writeln("<br>");

document.writeln("Bitwise Logical operators");
document.writeln("<br>");
//
let age = 8;
console.log( 2 & 3); //2
console.log( 2 | 3); //3
console.log( 2 ^ 3); //1
document.writeln("Logical operators");
console.log(age >= 18 && age <= 60); // output false
console.log(age >= 18 || age <= 60); // output true
document.writeln("check output on console");
document.writeln("<br>");

document.writeln("Ternary operators");
document.writeln("<br>");
//condition ? "Exp 1 true" : "Exp2 false";
let result = (age >= 18) ? "Yes" : "No";
document.writeln(result); // Output: No
//to find whether num is even or odd
let num = 10;
let res = (num%2==0) ? "Even" : "Odd";
document.writeln(res); // Output: Even

document.writeln("<br>");

document.writeln("Type operators");
document.writeln("<br>");
let p = 10;
document.writeln(p);
document.writeln(typeof(p)); //string
document.writeln("<br>");

let q = "Hello";
document.writeln(q);
document.writeln(typeof(q));
document.writeln("<br>");

let r = true;
document.writeln(r);
document.writeln(typeof(r));
document.writeln("<br>");
document.writeln("<br>");

console.log(typeof "Hello");
console.log([1,2,3] instanceof Array)
