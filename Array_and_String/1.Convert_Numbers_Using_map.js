/*
 * Return a new array where each number is doubled.
 */
const nums = [1, 2, 3, 4, 5];
// Output: [2, 4, 6, 8, 10]

let result=[];
for(let i=0;i<nums.length;i++){
  result[result.length]=nums[i]*2;
}
console.log(result);