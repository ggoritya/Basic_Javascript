class Marks
{
    a:number ;
    b: number;
    constructor(a1:number,b1:number)
    {
        this.a=a1;
        this.b=b1;
    }
    add():void
    {
        console.log("adding of numbers " +(this.a+this.b));
    }
}
let x= new Marks(1,2);
let y= new Marks(3,4);
let z= new Marks(5,6);
x.add();


