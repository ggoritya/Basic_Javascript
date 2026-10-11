interface vinfo
{
    vid :number,
    vname : string,
    vmileage :number,
    vspeed :number,
    isActive : true,
    vaddress :
    {
        vstreet : number,
        varea : string,
        vstate : string,
        vpin : number
    }
}


let vehicle : vinfo =
{
    vid :12,
    vname : "Gayathri",
    vmileage :3223,
    vspeed :23,
    isActive : true,
    vaddress :
    {
        vstreet : 1,
        varea : "koti",
        vstate : "Telangana",
        vpin : 502032
    }
}

for(let A in vehicle)
{
    console.log(vehicle)
}

console.log("-----------------------------")

for(let A in vehicle)
{
    console.log(vehicle)
}


