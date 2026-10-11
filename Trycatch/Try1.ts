try{
    let age:number=19;
    if(age<18)
    {
        throw new Error("Not Eligible")
    }
    console.log("Eligible")
}
catch(error1){
    console.log("Age must be  greater than 18")
}