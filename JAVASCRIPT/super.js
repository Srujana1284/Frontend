class Parent {
    constructor(name) {
        this.name = name;
    }
    marry() {
        console.log("Marry at 28")
    }
    }

class Child extends Parent {
    constructor(name, age) {
        super(name); //super() is used to call parent class constructor
        this.age = age;
    }   
    marry() {
        super.marry(); //super.marry() is used to call parent class method
        console.log("Marry at 32");
    }   
}

let c = new Child("Abhi", 23);
console.log(c.name);
console.log(c.age);
c.marry();