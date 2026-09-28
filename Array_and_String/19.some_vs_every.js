/*
 * You have [12, 18, 45, 67].
 * You want to check if at least one number is greater than 50.
 * Would you use some or every? Why?
 */
// Expected idea: choose some

const array=[12, 18, 45, 67];
const result=array.some(arr=>arr>50);
console.log(result);