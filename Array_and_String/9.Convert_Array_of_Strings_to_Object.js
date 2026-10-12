/*
 * Convert this array of strings into an object.
 */
const fruits = ["apple", "banana", "mango"];
// Output: { apple: "apple", banana: "banana", mango: "mango" }
//Method 1
const result=[];
for(let i=0;i<fruits.length;i++){
  result[fruits[i]]=fruits[i];
}
console.log(result)