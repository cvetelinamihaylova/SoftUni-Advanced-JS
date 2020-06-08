function solve(arr){
const newArr = [];
arr.reduce((acc, curr, index)=>{
if(index%2!==0){
    acc.push(curr*2);
}
return acc
}, newArr)
.reverse()

console.log(newArr.join(' '))
}
solve([10, 15, 20, 25])