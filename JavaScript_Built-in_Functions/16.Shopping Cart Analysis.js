// Problem 6 — Shopping Cart Analysis
// Input
const cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 2 },
  { name: "Keyboard", price: 2000, quantity: 1 },
  { name: "Monitor", price: 12000, quantity: 2 }
];
/*Task
Generate a shopping cart report:

Calculate the total amount for each item.
Keep items whose total amount is above 2000.
Sort them by total amount in descending order.
Calculate the complete cart total.
Find the most expensive item.
Check whether any item has a quantity greater than 1.
Expected Output
{
  items: [
    { name: "Laptop", total: 50000 },
    { name: "Monitor", total: 24000 }
  ],
  cartTotal: 78000,
  mostExpensive: "Laptop",
  hasMultipleQuantity: true
}
*/
const total = cart.map(ct=>{
    const item = ct.price*ct.quantity;
    return{
        name : ct.name,
        total : item
    }
})
const above = total.filter(ct=>ct.total>2000);
const sorts = above.sort((g,h)=>h.total-g.total);
const value = total.reduce((acc,ct)=>acc+ct.total,0);
const expensive = cart.reduce((highest,item)=>{
    return item.price>highest.price ? item : highest;
}).name;
const quan = cart.some(ct=>ct.quantity>1);
const result = {
    items : sorts,
    cartTotal : value,
    mostExpensive : expensive,
    hasMultipleQuantity : quan
}

console.log(result);

