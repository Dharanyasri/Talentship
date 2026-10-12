// Problem: Sort tasks by priority (high → medium → low). If priorities are the same, sort by dueDate with the earliest first.

const tasks = [
  { title: "Fix bug", priority: "high", dueDate: "2026-09-05" },
  { title: "Write docs", priority: "low", dueDate: "2026-09-01" },
  { title: "Code review", priority: "high", dueDate: "2026-09-03" },
  { title: "Deploy", priority: "medium", dueDate: "2026-09-02" }
];
// Expected Output:

// ["Code review", "Fix bug", "Deploy", "Write docs"]

const order = ["high", "medium", "low"];

tasks.sort((a, b) =>
    order.indexOf(a.priority) - order.indexOf(b.priority) ||
    new Date(a.dueDate) - new Date(b.dueDate)
);

const result = tasks.map(task => task.title);

console.log(result);
