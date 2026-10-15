class Bank
{
    public name : string ="Gayathri";
    protected accountno : number = 470480;
    #password :string = "test";
    constructor(name1:string)
    {
        this.name=name1;
        console.log(name1);
    }

    Bankdetails() : void
    {
        console.log("in method " +this.accountno);
      //console.log("in method " +this.password);
    }
}
class UnionBank extends Bank
{
    UnionBankdetails()
    {
        console.log("childclass " + this.name);
        console.log("childclass " + this.accountno);
        console.log("childclass " + this.Bankdetails);
    }
}

let o =new UnionBank("Gayathri Rajasekhar");
o.Bankdetails();
console.log("test " + o.name);


