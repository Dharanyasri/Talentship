// Problem: Return the first debit transaction where amount >= 500 and status === "completed". Return null if no matching transaction exists.

const transactions = [
  { type: "credit", amount: 1000, status: "completed" },
  { type: "debit", amount: 200, status: "completed" },
  { type: "debit", amount: 600, status: "pending" },
  { type: "debit", amount: 750, status: "completed" },
  { type: "debit", amount: 800, status: "completed" }
];
// Expected Output:

// { type: "debit", amount: 750, status: "completed" }

const result = transactions.find(trans=>{
  return trans.type=="debit" && trans.amount>=500 && trans.status=="completed";
}) || null
console.log(result);