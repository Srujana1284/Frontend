//Array creation 2 ways
// 1. sq bracket[]  index - 0,1...
//index (n-1) = Length
let stu_info = [102, "Abhi", 8.9, true]
console.log(stu_info) //[ 102, 'Abhi', 8.9, true ]
console.log(stu_info[1]) //Abhi

// 2. Array constructor()
let arr = new Array(1, 2, 3, 4)
console.log(arr) //[ 1, 2, 3, 4 ]


//Add elements
arr.push(5) //pushed at end [ 1, 2, 3, 4, 5 ]
arr.push(6, 7) //push multiple elems
arr.unshift(0) //Inserts elemts at 1st position
//Remove elements
arr.pop() //pops last inserted arrays single elem
arr.shift() //delets elemnt from 1st start
console.log(arr)


//Splice & Slice

//Splice is modifying og array
let nums = [10, 20, 30, 40, 50]
console.log(nums)
//array.splice(start index, deleteCount, item1, item2,....)
//console.log(nums.splice(1,2)) //[ 20, 30 ] -->removed elems
//console.log(nums) //[ 10, 40, 50 ] --After deletion
//nums.splice(2,0,60,70,80)
//nums.splice(2,0, 60, 12) // add
//nums.splice(2, 1, 100)

console.log(nums) //[ 10, 20, 300, 30, 40, 50 ]


//Slice()-Returns a shallow copy of a portion of an array without modifying original array
let arr1 = nums.slice(1, 4) // 10, 20, 30, 40, 50 ]
console.log(arr1) //[ 20, 30, 40 ]
console.log(nums) //[ 10, 20, 30, 40, 50 ]
//Doesnt modify array just extracts part of array

let fruits = ["apple", "banana", "cherry"];
console.log(fruits.indexOf("banana")); // Output: 1
console.log(fruits.includes("banana")); // Output: true
console.log(fruits.sort()); // Output: "apple, banana, cherry"
console.log(fruits.reverse()); // Output: ["cherry", "banana", "apple"]
let f = fruits.forEach(fruit => console.log(fruit)); // Output: "apple", "banana", "cherry"


fruits.forEach(fruit =>console.log(fruit));

let n = [1, 2, 3];
let squared = n.map(num => num * num);
console.log(squared); // Output: [1, 4, 9 ]
console.log(n) // [ 1, 2, 3 ] --original array not modified

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

numbers = [1, 2, 3, 4];
let sum = numbers.reduce((sum, num) => sum + num, 0);
console.log(sum); // Output: 10

let arr4 = [1, 2];
let arr5= [3, 4];
let combined = arr4.concat(arr5);
console.log(combined); // Output: [1, 2, 3, 4]
 

let words = ["Hello", "World", 0.899];
let sentence = words.join(" ");
console.log(sentence); // Output: "Hello World"

//Destruing arrays/Unpacking arrays
let fru = ["apple", "banana", "cherry"];
let [first, second, third] = fru;
console.log(first);
console.log(third);


