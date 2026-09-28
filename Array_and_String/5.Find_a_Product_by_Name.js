/*
 * Find the object whose name is "Keyboard".
 */
const products = [
  { id: 1, name: "Mouse", price: 500 },
  { id: 2, name: "Keyboard", price: 1200 },
  { id: 3, name: "Monitor", price: 8000 }
];
// Output: { id: 2, name: "Keyboard", price: 1200 }

let result=[];
for(let i=0;i<products.length;i++){
  if(products[i].name=="Keyboard");
    result=products[i];
}
console.log(result);