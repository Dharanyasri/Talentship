/*
 * You have [12, 18, 45, 67].
 * You want to check if all numbers are greater than 10.
 * Would you use some or every? Why?
 */
// Expected idea: choose every

const array=[12, 18, 45, 67];
const result=array.every(arr=>arr>10);
console.log(result);