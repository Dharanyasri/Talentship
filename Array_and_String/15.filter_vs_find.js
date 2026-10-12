/*
 * You need the first student whose marks are above 80.
 * Would you use filter or find? Why?
 */
// Expected idea: choose find
const students = [
  { name: "Aditi", marks: 45 },
  { name: "Rohan", marks: 78 },
  { name: "Meera", marks: 88 },
  { name: "Karan", marks: 32 }
];

const result=students.find(function(students){
  return students.marks>80;
});
console.log(result);