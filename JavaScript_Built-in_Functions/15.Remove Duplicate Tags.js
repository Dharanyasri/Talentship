// Problem 5 — Remove Duplicate Tags
// Input
const posts = [
  {
    id: 1,
    tags: ["javascript", "react", "frontend"]
  },
  {
    id: 2,
    tags: ["node", "javascript", "backend"]
  },
  {
    id: 3,
    tags: ["react", "typescript", "frontend"]
  }
];
/*Task
Create a unique tag list:

1.Extract all tags from all posts.
2.Combine them into a single list.
3.Remove duplicate tags.
4.Sort the tags alphabetically.
5.Keep only tags containing more than 5 characters.
6.Convert the final list into a comma-separated string.
Expected Output
"backend, frontend, javascript, typescript" */
const tags = posts.map(post=>post.tags);
const single = tags.reduce((acc,sum)=>acc.concat(sum),[]);
const duplicate = single.reduce((acc,tag)=>{
        if(!acc.includes(tag)){
            acc.push(tag);
        }
        return acc;
    
},[]);
const result = duplicate.filter(post=>post.length>5).sort();
const final = `"${result.join(", ")}"`
console.log(final);