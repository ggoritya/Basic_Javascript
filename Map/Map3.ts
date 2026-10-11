let m = new Map()
m.set(true, 2)
m.set(true, 1)
m.set("Name" , "Gayathri")
m.set("Name" , "Raja")
m.set("ID", 8)


for ( let G of m.keys())
{
    console.log(G)
}

console.log("-----------");
for(let G of m.values())
{
    console.log(G)
}