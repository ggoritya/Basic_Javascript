class Cow
{
    mycolor ="white"
    constructor()
    {
        console.log("In parent constructor " + this.mycolor)
    }
}
class Calf extends Cow
{
    mycolor="brown";
   // constructor()
    //{
       // super();
     //   console.log("Child constructor "  + mycolor);
    //}
}
new Calf();