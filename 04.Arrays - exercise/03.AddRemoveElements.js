function solve(array){
let n = 1;
const result = [];
array.forEach(element => {
    element === "add" ? result.push(n) : result.pop();
    n++
});
return result.length === 0 ? "Empty" : result.join('\n');   
}
console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']
))