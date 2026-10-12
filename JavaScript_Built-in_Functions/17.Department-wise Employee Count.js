// Problem 7 — Department-wise Employee Count
// Input
const employees = [
  { name: "Arun", department: "IT" },
  { name: "Priya", department: "HR" },
  { name: "Karthik", department: "IT" },
  { name: "Divya", department: "Finance" },
  { name: "Bala", department: "HR" },
  { name: "Anu", department: "IT" }
];

// Task 
// Generate a department report:

// Group employees by department.
// Count employees in each department.
// Convert the result into an array.
// Sort departments by employee count in descending order.
// Return only departments having more than one employee.
// Expected Output
// [
//   { department: "IT", count: 3 },
//   { department: "HR", count: 2 }
// ]

const group = employees.reduce((acc,emp)=>{
    if(!acc[emp.department]){
       acc[emp.department]=0;
    }
    acc[emp.department]++;
    return acc;
},{})
const convert = Object.keys(group).map(dep=>{
    return {
        department : dep,
        count : group[dep]
    }
})
const sorts=convert.sort((g,h)=>h.count-g.count).filter(fr=>fr.count>1);

console.log(sorts);