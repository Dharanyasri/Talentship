// Problem: Return the full names ("First Last") of employees who are active and belong to the Engineering department, sorted alphabetically.

const employees = [
  { first: "Anita", last: "Rao", department: "Engineering", active: true },
  { first: "Bob", last: "Lee", department: "Sales", active: true },
  { first: "Carla", last: "Mendes", department: "Engineering", active: false },
  { first: "David", last: "Kim", department: "Engineering", active: true }
];

//["Anita Rao", "David Kim"]

const grouped = employees.filter(emp=>{
 return emp.department=="Engineering" && emp.active==true;
}).map(emp=> {return emp.first+" "+emp.last});

grouped.sort();
console.log(grouped);