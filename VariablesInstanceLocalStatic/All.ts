class Vehicle
{
    static s : string = "Print static varibale";  //static variable
    i:string = "Print instance variable";           //instance variable
    Bike() : void
    {
        console.log("Bike method");
        let l: string = "Print local variable";
        console.log(l)    //local variable
        console.log("printing inside method "  +this.i)
        console.log("printing inside method " + Vehicle.s) 
    }

}
let c = new Vehicle();
c.Bike();
console.log(c.i);
console.log(Vehicle.s);
