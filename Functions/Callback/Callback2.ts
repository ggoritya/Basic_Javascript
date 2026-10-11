let a : number=1;
let b:number = 5;
function add()
{
    let t : number=0
    for(let g: number =1;g<=8;g++)
    {
        t=+g;
    }
    console.log("sum of all numbers " +t)
}
setTimeout(():void =>
{
    add();
})
console.log(a+b)
