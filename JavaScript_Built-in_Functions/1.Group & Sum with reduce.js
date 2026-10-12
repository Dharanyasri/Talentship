const sales = [
  { product: "Laptop", category: "Electronics", amount: 1200 },
  { product: "Mouse", category: "Electronics", amount: 25 },
  { product: "Desk", category: "Furniture", amount: 350 },
  { product: "Chair", category: "Furniture", amount: 180 },
  { product: "Monitor", category: "Electronics", amount: 400 }
];

/* output 
[
  { category: "Electronics", total: 1625 },
  { category: "Furniture", total: 530 }
]
*/


const grouped = sales.reduce((acc,sale)=>{
  if(!acc[sale.category]){
    acc[sale.category]=0;
  }
  acc[sale.category]+=sale.amount;
  return acc;
},{});

const result=Object.keys(grouped).map(category=>({category:category,total:grouped[category]}));
result.sort((a,b)=>b.total-a.total);
console.log(result); 