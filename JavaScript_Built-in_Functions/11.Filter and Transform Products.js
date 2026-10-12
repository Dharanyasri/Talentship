
const products = [
  { name: "Laptop", price: 60000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2500 },
  { name: "Monitor", price: 15000 },
  { name: "USB Cable", price: 500 }
];
// Task
// Create a product report:

// Get products costing more than 1000.
// Apply a 10% discount to those products.
// Sort them by discounted price from low to high.
// Return only the product names.
// Check whether "Monitor" exists in the final result.
// Expected Output
// {
//   products: ["Keyboard", "Monitor", "Laptop"],
//   hasMonitor: true
// }

const result = products.filter(prd=>{
  return prd.price>1000;
}).map(prd=>{
  const discount = prd.price*10/100;

  return {
    name : prd.name,
    discountedprice : prd.price-discount
  }
}).sort((a,b)=>{
  return a.discountedprice-b.discountedprice;
});
const name = result.map(res=>res.name);
const final = {
  product : name ,
  hasMonitor : name.includes("Monitor")
}
console.log(final);