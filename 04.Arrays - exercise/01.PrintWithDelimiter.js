function solve(arr){
const del = arr.pop();
return arr.join(del);
}
console.log(solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
))