//Single Inheritance
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}

let d = new Dog();
d.eat();
d.bark();


//Multi-Level Inheritance
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}

class Puppy extends Dog {
    cry() {
        console.log("Crying");
    }
}


//Hierarchical Inheritance
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}

class Cat extends Animal {
    meow() {
        console.log("Meowing");
    }
}

let d = new Dog();
let c = new Cat();


//Hybrid Inheritance
//    Animal
//    /    \
//  Dog    Cat
//   |
// Puppy