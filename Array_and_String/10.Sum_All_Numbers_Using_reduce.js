/*
 * Find the total sum of all marks using reduce.
 */
const marks = [78, 82, 91, 65];
// Output: 316
// const result = marks.reduce((sum,mark)=>sum+=mark);
// console.log(result);

let total=0;
for(let i=0;i<marks.length;i++){
  total+=marks[i];
}
console.log(total);