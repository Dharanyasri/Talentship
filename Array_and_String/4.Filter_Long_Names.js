/*
 * Return only the names whose length is greater than 4.
 */
const names = ["Asha", "Rohan", "Meena", "Raj", "Ananya"];
// Output: ["Rohan", "Meena", "Ananya"]

let result =[];
for(let i=0;i<names.length;i++){
  if(names[i].length>4){
    result[result.length]=names[i];
  }
}
console.log(result);