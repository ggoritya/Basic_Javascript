let scooty = 470    //declare let scooty
console.log(scooty) //470

escooty = 480    //reassign let scooty
console.log(escooty) //480

//let escooty = 480 //Cannot redeclare block-scoped let 'scooty'.

{
    console.log(escooty) //calling outside let in inside block
    let ecar = 12344    //calling inside let in inside block
    console.log(ecar)   //12344
}

 //   console.log(ecar)   //calling inside let outside block is not allowed

