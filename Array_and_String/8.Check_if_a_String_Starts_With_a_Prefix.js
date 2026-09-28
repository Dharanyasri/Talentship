/*
 * Check whether the string starts with "java".
 */
const word = "javascript";
// Output: true


console.log(word.startsWith("java"));


const result=true;
for(let i=0;i<4;i++){
  if(word[i]!=="java"[i]){
    result=false;
    break;
  }
}
console.log(result);