/*
 * Return the first number greater than 50.
 */
const values = [12, 18, 45, 67, 22, 90];
// Output: 67


let result;
for(let i=0;i<values.length;i++){
  if(values[i]>50){
    result=values[i];
    break;
  }
}
console.log(result);