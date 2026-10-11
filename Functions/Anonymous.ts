function vehicle(num:number):void
{
    console.log(num)
}
vehicle(470)
function Car(a:(num:number)=>void):void
{
    console.log(a(480))
}
Car(vehicle)