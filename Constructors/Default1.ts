class Vehicle
{
     a : string ="outside variable"
     b: string ="object variable"
     constructor()
     {
        console.log("Inside constructor" + this.a)
     }
}
let o = new Vehicle();
console.log(o.a);
console.log(o.b);
new Vehicle();