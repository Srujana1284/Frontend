//Abstraction in JavaScript refers to the concept of hiding the complex implementation details and showing only the essential features of an object or function. It allows developers to focus on what an object does rather than how it does it.

// In JavaScript, abstraction can be achieved using classes and methods. By defining a class with methods, we can create objects that encapsulate data and behavior, while hiding the internal workings from the outside world.

// Example Without Abstraction
class CoffeeMachine {
    boilWater() {
        console.log("Boiling water...");
    }
    addCoffee() {
        console.log("Adding coffee powder...");
    }
    addMilk() {
        console.log("Adding milk...");
    }
    serveCoffee() {
        console.log("Coffee Ready!");
    }
}


const machine = new CoffeeMachine();

machine.boilWater();
machine.addCoffee();
machine.addMilk();
machine.serveCoffee();


// Example With Abstraction
class CoffeeMachineWithAbstraction {
    makeCoffee() {  
        this.boilWater();
        this.addCoffee();
        this.addMilk();
        this.serveCoffee();
    }

    boilWater() {
        console.log("Boiling water...");
    }

    addCoffee() {
        console.log("Adding coffee powder...");
    }

    addMilk() {
        console.log("Adding milk...");
    }       

    serveCoffee() {
        console.log("Coffee Ready!");
    }   

}

const machineWithAbstraction = new CoffeeMachineWithAbstraction();
machineWithAbstraction.makeCoffee(); // Only the essential feature is exposed to the user   


