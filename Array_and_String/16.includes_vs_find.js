/*
 * You only need to know whether "editor" exists in ["admin", "editor", "viewer"].
 * Would you use includes or find? Why?
 */
// Expected idea: choose includes

const array=["admin", "editor", "viewer"];
const result=array.includes("editor");
console.log(result);