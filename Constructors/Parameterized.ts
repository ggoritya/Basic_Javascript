class Vehicle
{
    a:string="variable1";
    constructor(b:string,c:string)
    {
        console.log("print constructur value " +b,c )
        console.log("print outside variable " +this.a)
    }
}
let o = new Vehicle("test1","test2");