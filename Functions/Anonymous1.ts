function prepareFood(callback: () => void): void 
{
    console.log("Chef is preparing food...");
    callback();
}
function notifyCustomer(): void
{
    console.log("Customer, your food is ready!");
}
prepareFood(notifyCustomer);

console.log("--------------------")

function prepareFood1(callback: () => void): void
{
    console.log("Chef is preparing food...");
    callback();
}

prepareFood1(function () 
{
    console.log("Customer, your food is ready!");
});