function createaccount (username:string, aadharno?:number)
{
    if(aadharno==undefined)
    {
        console.log("user is creating gmail account")
    }
    else
    {
        console.log("user creating bank account number")
    }
}
createaccount("Ram")
