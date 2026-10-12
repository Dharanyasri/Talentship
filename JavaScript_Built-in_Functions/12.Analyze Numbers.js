
const numbers = [10, 25, 30, 45, 50, 65, 70, 85];
/*
Task
Get only even numbers.
Multiply each even number by 2.
Calculate their total.
Find the first transformed number greater than 100.
Check whether all transformed numbers are positive.
Expected Output
{
  numbers: [20, 60, 100, 140],
  total: 320,
  firstAbove100: 140,
  allPositive: true
}
*/

const even = numbers.filter(num=>num%2==0).map(num=>num*2);
const total = even.reduce((acc,num)=>acc+num,0);
const first = even.find(en=>en>100);
const positive = even.every(en=>en>0);
const result = {
  numbers : even,
  total : total,
  firstAbove100 : first,
  allPositive: true
}
console.log(result);