function solve(array){
const rotations = +array.pop()%array.length;
for (let i = 0; i < rotations; i++) {
    array.unshift(array.pop());
}
return array.join(' ');
}
console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
))