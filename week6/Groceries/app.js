let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
let displayGroceries = () => (
    groceries.fruits.forEach(element => {
        console.log(element)
    }));
displayGroceries()
// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. 
// (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is a copy of the groceries object. 
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// yes because its a primitive kind
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
// yes because its a primitive kind
// Invoke the cloneGroceries function.

let cloneGroceries = () => {
    let user = client;
    client = 'Betty';
    let shopping = groceries
    shopping.totalPrice = "35$"
    shopping.paidkey = false

}
cloneGroceries()
console.log(groceries)

