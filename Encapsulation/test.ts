class Bankinfo
{
    #userpassword :number;
    #name :string;
    #amount :number;
    constructor(upwd:number,uname:string,uamt:number)
    {
        this.#userpassword=upwd;
        this.#name=uname;
        this.#amount=uamt;
    }
    setuserpin(upwd:number) 
    {
        this.#userpassword=upwd;
    }
    getuserpin():number
    {
        return this.#userpassword;
    }
}
let o = new Bankinfo(1234,"Gayathri", 800000);
o.setuserpin(12345);
console.log(o.getuserpin());
