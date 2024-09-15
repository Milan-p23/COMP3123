class Car {
    constructor(name, year, ) {
        this.name = name;
        this.year = year;
        }

    details () {
        console.log(`Name: ${this.name}, Year: ${this.year}`);
    }

}

class Sedan extends Car {
    constructor(name, year, balance) {
        super(name, year);
        this.balance = balance;
        }

        info () {
            console.log(`Name: ${this.name}, Year: ${this.year}, Balance: ${this.balance}`);
        }
}

const car2 = new Car('Pontiac Firebird', 1976);
car2.details();

// Subclass - extends Car super class
const sedan = new Sedan('Volvo SD', 2018, 30000);
sedan.info();