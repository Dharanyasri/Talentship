// Problem 9 — Employee Skills Analysis
// Input
const employees = [
  {
    name: "Arun",
    skills: ["JavaScript", "React", "Node"]
  },
  {
    name: "Priya",
    skills: ["JavaScript", "Angular"]
  },
  {
    name: "Karthik",
    skills: ["React", "Node", "Python"]
  },
  {
    name: "Divya",
    skills: ["JavaScript", "React"]
  }
];
/*Task
Generate a skill report:

Extract all skills from all employees.
Count how many employees know each skill.
Convert the skill count into an array.
Sort skills by usage count in descending order.
Keep skills known by at least 2 employees.
Find employees who know both JavaScript and React.
Expected Output
{
  popularSkills: [
    { skill: "JavaScript", count: 3 },
    { skill: "React", count: 3 },
    { skill: "Node", count: 2 }
  ],
  javascriptReactDevelopers: [
    "Arun",
    "Divya"
  ]
}
*/

const skill = employees.map(emp=>emp.skills);
const counts = {};
employees.forEach(employee=>{
    employee.skills.forEach(skill=>{
    if(!counts[skill]){
        counts[skill]=0
    }
    counts[skill]++;
})
})
const arry = Object.keys(counts).map(skill=>{
    return{
    skill : skill,
    count : counts[skill]
    }
})
const arrg = arry.sort((g,h)=>h.count-g.count);
const fit = arrg.filter(arr=>arr.count>=2);
const find = employees.filter(emp=>
        emp.skills.includes("JavaScript") && emp.skills.includes("React")).map(emp=>emp.name);

const result = {
    popularSkills : fit,
    javascriptReactDevelopers : find
}

console.log(result);