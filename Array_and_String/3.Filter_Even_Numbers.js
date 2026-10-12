// /*
//  * Return a new array containing only the even numbers.
//  */
 const numbers = [3, 8, 11, 14, 20, 25];
// // Output: [8, 14, 20]
const result = [];
for(let i=0;i<numbers.length;i++){
   if(numbers[i]%2==0){
     result[result.length]=numbers[i];
   }
 }
console.log(result);