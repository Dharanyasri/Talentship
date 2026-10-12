// Problem: Extract all unique tags from the posts and return them sorted alphabetically.

const posts = [
  { id: 1, tags: ["js", "node", "js"] },
  { id: 2, tags: ["api", "node"] },
  { id: 3, tags: ["js", "testing"] }
];
// Expected Output:

// ["api", "js", "node", "testing"]
const ret = posts.flatMap(post=>post.tags);
const unique = [...new Set(ret)];
unique.sort();
console.log(unique);
