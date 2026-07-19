class BankBalance {
    #balance; // Private field
    constructor(balance) {
        this.#balance = balance;
    }
    getBalance() {
        return this.#balance;
    }

    deposit(amt) {
        this.#balance += amt;
        console.log(`Deposited: ${amt}`);
}
}

let b = new BankBalance(20000);
//console.log(b.balance);
b.deposit(200);
console.log(`Available balance: ${b.getBalance()}`); // Accessing the private field using the getter method