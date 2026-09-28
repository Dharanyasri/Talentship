/*
 * Check whether "editor" exists in the array.
 */
const roles = ["admin", "editor", "viewer"];
// Output: true

let result=false;
for(let i=0;i<roles.length;i++){
  if(roles[i]=="editor"){
    result=true;
    break;
  }
}
console.log(result);