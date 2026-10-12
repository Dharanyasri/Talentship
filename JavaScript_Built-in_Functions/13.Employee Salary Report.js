// Problem 3 — Employee Salary Report
const employees = [
  { name: "Arun", department: "IT", salary: 50000 },
  { name: "Priya", department: "HR", salary: 40000 },
  { name: "Karthik", department: "IT", salary: 70000 },
  { name: "Divya", department: "IT", salary: 60000 },
  { name: "Bala", department: "Finance", salary: 45000 }
];
/*
Task
Generate an IT employee salary report:

Get employees from the IT department.
Give them a 10% salary hike.
Sort them by new salary in descending order.
Calculate the total salary after the hike.
Find the highest-paid IT employee.
Expected Output
{
  employees: [
    { name: "Karthik", salary: 77000 },
    { name: "Divya", salary: 66000 },
    { name: "Arun", salary: 55000 }
  ],
  totalSalary: 198000,
  highestPaid: "Karthik"
}
*/

const a = employees.filter(emp=>emp.department=="IT");
const b=a.map(emp=>{
  const newsalary=emp.salary+(emp.salary*10/100);
  return {
    name : emp.name,
    salary : newsalary,
  }
});
b.sort((g,h)=>h.salary-g.salary);
const c = b.reduce((acc,emp)=>acc+emp.salary,0);
const d = b.reduce((highest,emp)=>{
  return emp.salary>highest.salary ? emp : highest;
}).name;
const result = {
  employees: b,
  totalSalary: c,
  highestpaid : d
};
console.log(result);