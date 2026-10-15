abstract class myBiketobuy
{

    abstract color():void;
    abstract model():void;
    emi():void
    {
        console.log("Didnt kept any EMI direct cash")
    }
}
class myBike extends myBiketobuy
{
    color(): void {
        let a : string= "test"
        console.log("purple color bike " + a);
    }
    model(): void {
        console.log("new model");
    }
    test():void
    {
        console.log("for testing purpose");
    }
}
let o = new myBike();
o.color();
o.emi();
o.model();
o.test();
