/*
 * Return a new array like ["Pen - 10", "Book - 50"].
 */
const products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 }
];
// Output: ["Pen - 10", "Book - 50"]

//Method 1
const result=products.map(products=>products.name+"-"+products.price);
console.log(result);