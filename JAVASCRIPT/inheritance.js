class Employee {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    display() {
        console.log("Name: " + this.name + ", Age: " + this.age);
    }
    designation() {
        console.log(this.role);
    }
}

class Developer extends Employee {
    work() {
        console.log("I do Coding");
    }
}

class Tester extends Employee {
    work() {
        console.log("I do Debugging");
    }
}

let d = new Developer("Abhi", 23, "Frontend Developer");
d.display();
d.designation();
d.work();

let t = new Tester("Navya", 29, "QA Tester");
t.display();
t.designation();
t.work();