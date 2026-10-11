class School
{
    name:string;
    section:string;
    rollno :number;
    constructor(cname:string,csection:string,crollno:number)
    {
        this.name=cname;
        this.section=csection;
        this.rollno=crollno;
    }
    start()
    {
        console.log("Parent School satrted....");
    }
    stop()
    {
        console.log("Parent School stopped.....");
    }
    displayInformation()
    {
        console.log(`Parent class , Name:${this.name},Section:${this.section},RollNo:${this.rollno}`)
    }

}
class MPCR extends School
{
    medium:string;
    constructor(cname:string,csection:string,crollno:number,cmedium:string)
    {
        super(cname,csection,crollno);
        this.medium=cmedium;
    }
    start()
    {
        console.log("child class MPCR started .....");
    }
    Information(): void 
    {
        console.log("child class info " +this.medium)    
    }
    displayInformation(): void
    {
        console.log(`Child class - Name : ${this.name},Section : ${this.section},${this.rollno},${this.medium}`);  
    }
}
class MNR extends School
{
    Games:string;
    constructor(name:string,section:string,rollno:number,games:string)
    {
        super(name,section,rollno)
        this.Games=games
    }
    start(): void 
    {
        console.log(`MNR extending....${this.name} , ${this.section} , ${this.rollno} , ${this.Games}`);
    }
}
    let co= new MPCR("Gayathri", "B", 480,"English" );
    console.log(co.name);
    console.log(co.section);
    console.log(co.rollno);
    console.log(co.medium);

    co.start();
    co.stop();
    co.displayInformation();
    co.Information();

    let po = new School("Rajasekhar", "B", 470 );
    po.displayInformation();
    console.log(po.name);
    console.log(po.rollno);
    console.log(po.section);
    po.stop();
    po.start();

    let co1 = new MNR("Raaj","C", 490, "ko-kho");
    co1.displayInformation();
    co1.start();
