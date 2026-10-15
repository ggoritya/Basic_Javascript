class Bank
{
    #accountno : number;
    #pin : number;
    constructor(uaccountno:number,upin:number)
    {
        this.#accountno=uaccountno;
        this.#pin=upin;
    }
    
    setdetails(uaccountno:number,upin:number)
    {
        this.#accountno=uaccountno;
        this.#pin=upin;
    }
    getdetails(): number
    {
        return this.#accountno;
    }
    getpin(): number
    {
        return this.#pin;
    }
}
let o= new Bank(99999999,9090);
o.setdetails(8888888,888);
console.log(o.getdetails());
console.log(o.getpin());


