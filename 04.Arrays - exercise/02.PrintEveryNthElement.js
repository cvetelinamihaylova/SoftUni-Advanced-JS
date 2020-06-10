function solve(arr){
const n = +arr.pop();
const result = [];
for (let i = 0; i < arr.length; i+=n) {
    result.push(arr[i]);
}
return result.join('\n')
}
console.log(solve(['1', 
'2',
'3', 
'4', 
'5', 
'6']

))