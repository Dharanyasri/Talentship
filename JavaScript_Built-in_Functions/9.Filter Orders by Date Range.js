// Problem: Return the IDs of orders placed between start and end, inclusive.

const orders = [
  { id: "A1", placedAt: "2026-08-28T10:00:00.000Z" },
  { id: "A2", placedAt: "2026-09-01T08:00:00.000Z" },
  { id: "A3", placedAt: "2026-09-03T15:00:00.000Z" },
  { id: "A4", placedAt: "2026-09-10T12:00:00.000Z" }
];

const start = "2026-09-01";
const end = "2026-09-05";

// Expected Output:

// ["A2", "A3"]

const result = orders.filter(order=>{
  const date = new Date(order.placedAt);
  return date >= new Date(start) && date <=new Date(end);
}).map(order=>order.id);

console.log(result);