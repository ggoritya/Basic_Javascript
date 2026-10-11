class Parentclas
{
    n:number=470;
    constructor()
    {
        console.log("this is parent class constructor....")
    }
    display()
    {
        console.log("this parent class display method..." + this.n)
    }
}
class childclas extends Parentclas
{
    n:number=480;
    constructor()
    {
        super();//this call will parent class
        console.log("this is child clss....")

    }
    show()
    {
        console.log("child class " + this.n);
    }
    display()
    {
        super.display();    //this will print parent method class
        console.log("this child class display method...") // tthis wil print child
    }
}

let o = new childclas();
o.display();
console.log(o.n);
o.show();
