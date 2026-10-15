abstract class Vehicle {
    constructor(public brand: string) {}

    abstract getMileage(): number;

    displayDetails(): void {
        console.log(
            `Brand: ${this.brand}, Mileage: ${this.getMileage()} km/l`
        );
    }
}

class Car extends Vehicle {
    constructor() {
        super("Toyota");
    }

    getMileage(): number {
        return 18;
    }
}

class Bike extends Vehicle {
    getMileage(): number {
        return 55;
    }
}

let car = new Car();
car.displayDetails();

let bike = new Bike("BMW");
bike.displayDetails();