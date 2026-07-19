const fly = {
    fly() {
        console.log("I can fly");
    }
};

const swim = {
    swim() {
        console.log("I can swim");
    }
};

class Duck { }

// Mixin the fly and swim behaviors into the Duck class
//Copy of duck class with fly and swim methods
//Mixin - Parent class cant be inherited but methods/objects can be copied to child class
Object.assign(Duck.prototype, fly, swim);
let d = new Duck();
d.fly();
d.swim();
