let num = 1;

for (let r = 1; r <= 3; r++) {
    let output = "";

    for (let c = 1; c <= 3; c++) {
        output += num + " ";
        num++;
    }

    console.log(output);
}