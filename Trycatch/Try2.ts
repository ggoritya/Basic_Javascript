try{
    let array1 =[1,2,3,4]
    if(array1.length==5)
    {
        throw new Error("Error go to catch")
    }
    console.log("array length is proper")
}
catch(error)
{
    console.log( "Because size is less")
}