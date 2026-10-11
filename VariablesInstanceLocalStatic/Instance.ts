class Animals
{
    i :string ="instance varibale";
    cat():void
    {
        console.log("Cat method");
        let c1:number=1;
    }
}
let c= new Animals;
console.log(c.i);
c.cat();
c.i="test";
console.log("test " + c.i);
