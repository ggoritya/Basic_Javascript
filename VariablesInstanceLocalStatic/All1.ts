class Employee
{
    static company : string = "CGI";
    name:string;
    constructor(name:string)
    {
        this.name = name;
    }
    display() : void
    {
        let l :string = "I am local varibale"
        console.log(l);
        console.log(this.name);
        console.log(Employee.company);
    }
}
let o1 = new Employee("Ram");
o1.display();
