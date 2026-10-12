// Problem 4 — Student Result Analysis
// Input
const students = [
  { name: "Asha", marks: [80, 75, 90] },
  { name: "Ravi", marks: [40, 50, 45] },
  { name: "Meena", marks: [95, 90, 92] },
  { name: "Kumar", marks: [60, 65, 70] }
];
/*Task
Generate a student result report:

Calculate the average mark of every student.
Keep students with an average of 60 or above.
Sort them by average in descending order.
Check whether any student has an average above 90.
Calculate the class average.
Expected Output
{
  passedStudents: ["Meena", "Asha", "Kumar"],
  hasExcellentStudent: true,
  classAverage: 72.67
} */

const a = students.map(std=>{
    const total = std.marks.reduce((acc,sum)=>acc+sum,0);
    const avg = total/std.marks.length;

    return {
        name : std.name,
        average : avg
    }
})
const b = a.filter(fil=>fil.average>=60).sort((g,h)=>h.average-g.average).map(fil=>fil.name);
const c = a.some(std=>std.average>90);
const d = a.reduce((acc,sum)=>acc+sum.average,0);
const cl = d/a.length;
const result = {
    passedStudents : b,
    hasExcellentStudent : c,
    classAverage : cl
}
console.log(result);