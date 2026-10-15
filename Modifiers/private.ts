class ATMinfo
{
    public name :string;
    protected accountno :number;
    private password:number;

    constructor(uname:string,uaccountno:number,upwd:number)
    {
        this.name=uname;
        this.accountno=uaccountno;
        this.password=upwd;
    }
    userdetails():void
    {
        console.log(`print details of user ${this.name} , ${this.accountno} , ${this.password}`);
    }
}
class user1 extends ATMinfo
{
    userdetails1() : void
    {
        console.log( "In child class " + this.name);
        console.log("In child class " + this.accountno);
      //  console.log("In child class " + this.password);
    }
}
let o = new ATMinfo("Gayathri" , 1011890 , 1234);
console.log(o.name);
o.userdetails();

let o1 = new user1("Raaj", 12432423 , 1090);
console.log("In child class " + o1.name);
//console.log(o1.accountno);    this is protected it will not come outside class or other object
o1.userdetails();
o1.userdetails1();





