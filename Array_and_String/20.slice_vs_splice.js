/*
 * You want a copy of the first 3 items without changing the original array.
 * Would you use slice or splice? Why?
 */
// Expected idea: choose slice
const names = ["Asha", "Rohan", "Meena", "Raj", "Ananya"];
const result=names.slice(0,3);
console.log(result);