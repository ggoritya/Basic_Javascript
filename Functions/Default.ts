function ticketBook(username : String, age : number, discount :String ="50% off")
{
    if (age<60)
    {
        console.log("pay full amount")
    }
    else
    {
        console.log("Fare amount " +discount  + "applied")
    }
}
ticketBook("Ram", 68)
