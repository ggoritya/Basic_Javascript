abstract class Bank
{
    bankname:string;
    constructor (ubankname:string)
    {
        this.bankname=ubankname;
    }
    abstract getInterestrate() :string;
    displaydetails():void
    {
        console.log(`Bank name is : ${this.bankname} , Interest rate is : ${this.getInterestrate()}`);
    }
}
class SBI extends Bank
{
    getInterestrate():string
    {
        return "10%";
    }
}
class HDFC extends Bank
{
    getInterestrate():string
    {
        return "10.99%";
    }
}
let o = new SBI("SBI");
o.displaydetails();

let o1 = new HDFC("HDFC");
o1.displaydetails();