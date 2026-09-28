/*
 * 1. Get only students who scored 50 or more.
 * 2. Find the first student who scored more than 80.
 * 3. Find the total marks of all students.
 */
const students = [
  { name: "Aditi", marks: 45 },
  { name: "Rohan", marks: 78 },
  { name: "Meera", marks: 88 },
  { name: "Karan", marks: 32 },
];
// Output 1: [{ name: "Rohan", marks: 78 }, { name: "Meera", marks: 88 }]
// Output 2: { name: "Meera", marks: 88 }
// Output 3: 243

let result =[];
let first=[];
let total=0;
let found=false;
for(let i=0;i<students.length;i++){
  if(students[i].marks>=50){
    result[result.length]=students[i];
  }
  if(students[i].marks>80 && found==false){
    first=students[i];
    found=true;
  }
  total+=students[i].marks;
}
console.log(result);
console.log(first);
console.log(total);