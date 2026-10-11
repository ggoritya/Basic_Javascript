let a:number=10;
let b:number=2;
export function add():void
{
    console.log(a+b)
}
add();


export function divide(x:number,y:number)
{
     return x/y;
}
console.log(divide(15,5))

export function substract():void
{
    console.log("Substraction default " + (a-b));
}

