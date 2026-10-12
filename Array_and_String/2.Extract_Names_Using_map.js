/*
 * Return a new array containing only the names.
 */
const users = [
  { id: 1, name: "Aditi" },
  { id: 2, name: "Rohan" },
  { id: 3, name: "Meera" }
];
// Output: ["Aditi", "Rohan", "Meera"]

let result=[];
for(let i=0;i<users.length;i++){
  result[result.length]=users[i].name;
}
console.log(result);