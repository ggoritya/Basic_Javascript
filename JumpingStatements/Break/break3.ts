function divide(a: number, b: number): number {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } catch (error) {
        console.log((error as Error).message);
        return 0;
    }
}

console.log(divide(10, 2));
console.log(divide(10, 0));

