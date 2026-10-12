// Problem 8 — Order Revenue Analysis
// Input
const orders = [
  {
    id: 1,
    status: "completed",
    items: [
      { name: "Laptop", price: 50000, qty: 1 },
      { name: "Mouse", price: 1000, qty: 2 }
    ]
  },
  {
    id: 2,
    status: "cancelled",
    items: [
      { name: "Keyboard", price: 3000, qty: 1 }
    ]
  },
  {
    id: 3,
    status: "completed",
    items: [
      { name: "Monitor", price: 15000, qty: 2 },
      { name: "Mouse", price: 1000, qty: 1 }
    ]
  }
];
/*Task
Generate an order revenue report:

Ignore cancelled orders.
Calculate the total amount of each completed order.
Sort orders by total amount in descending order.
Calculate the total revenue.
Extract all products from completed orders.
Remove duplicate product names.
Sort the product names alphabetically.
Expected Output
{
  orders: [
    { id: 1, total: 52000 },
    { id: 3, total: 31000 }
  ],
  revenue: 83000,
  products: ["Laptop", "Monitor", "Mouse"]
}*/

const comp = orders.filter(ord=>ord.status=="completed");
const total = comp.map(cp=>{
    const tot = cp.items.reduce((acc,sum)=>{
        return acc+(sum.price*sum.qty);
    },0)
    return {
        id : cp.id,
        total : tot
    }
})
const arrang = total.sort((g,h)=>h.total-g.total);
const revn = arrang.reduce((acc,sum)=>acc+sum.total,0);
const products = comp.flatMap(order => order.items).map(ord=>ord.name);
const uniqueNames = [...new Set(products)]; 
const final = uniqueNames.sort();
const result = {
    orders : total,
    revenue : revn,
    products : final
}
console.log(result);