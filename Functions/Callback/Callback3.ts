function greet(name: string): void {
    console.log("Hello " + name);
}

function processUser(callback: (name: string) => void): void {
    callback("Gayathri");
}

processUser(greet);
