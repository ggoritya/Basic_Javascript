abstract class Bank
{
    abstract getInterestRate() : void;
    displayBankName():void
    {
        console.log("Display bank name")
    }
}
class SBI extends Bank
{
    getInterestRate(): void 
    {
        console.log(" interest rate is 10%" );
    }
}
class HDFC extends Bank
{
    getInterestRate(): void 
    {
        console.log(" interest rate is 10.99%" );
    }
}
let o = new SBI();
o.displayBankName();
o.getInterestRate();

let o1 = new HDFC();
o1.displayBankName();
o1.getInterestRate();