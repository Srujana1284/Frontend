//Creating object directly
//Proprties defined in key value pair
/*let student = {
    name: "Rahul",
    age: 23,

    study() {
        console.log("Student is studying");
    }
};

console.log(student.name); // Rahul
console.log(student.age); // 23
student.study(); // Student is studying
*/
//Declaring inside class
class Student {
   // name = "Abhi";
    // age = 23;
    // constructor is a special method that is called when an object is created
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    study() {
        console.log(this.name + " Studies");
    }
}  
let s = new Student("Abhi", 23);
console.log(s.name); // Abhi
console.log(s.age); // 23
s.study(); // Abhi Studies
let s1 = new Student("Navya", 29);
console.log(s1.name); // Navya
console.log(s1.age); // 29
s1.study();

