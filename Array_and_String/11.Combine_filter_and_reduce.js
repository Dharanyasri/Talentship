/*
 * First filter the numbers greater than 15, then find their sum.
 */
const nums = [5, 10, 15, 20, 25, 30];
// Output: 75

let result=0;
for(let i=0;i<nums.length;i++){
  if(nums[i]>15){
   result+=nums[i];
  }
}
console.log(result);

