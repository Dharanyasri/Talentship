/*
 * You want to convert ["apple", "banana"] into { apple: "apple", banana: "banana" }.
 * Would you use map or reduce? Why?
 */
// Expected idea: choose reduce

const array=["apple", "banana"];
const result=array.reduce(function(object,arr){
  object[arr]=arr;
  return object;
},{});
console.log(result);




