class Employee {

    static company: string = "Microsoft";

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display() {
        let city = "Hyderabad";

        Employee.company = "Google";

        console.log(this.name);
        console.log(Employee.company);
        console.log(city);
    }
}

let emp1 = new Employee("Ram");
let emp2 = new Employee("Sita");

emp1.display();
emp2.display();