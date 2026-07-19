//same method name but different implementation
//poly = many morphism = forms
//one method name but different implementation is called polymorphism

// Types of Polymorphism in JavaScript
// Method overriding (Runtime Polymorphism)
// Method overloading (Not directly supported in JavaScript)

class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound();
cat.makeSound();

// The same method makeSound() behaves differently for different objects.