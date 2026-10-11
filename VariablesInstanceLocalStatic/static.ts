class Plants
{
   static  s : string = "Rose";
   Lily() : void
   {
    console.log("Lily method");
    console.log("In method " + Plants.s);
    console.log(Plants.s);
   }
}
let P = new Plants();
P.Lily();
console.log(Plants.s);
Plants.s="test"
console.log("test " + Plants.s);
