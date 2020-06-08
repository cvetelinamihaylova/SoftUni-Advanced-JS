function solve(arr){
const newArr = arr.flat();
const max = Math.max(...newArr);
console.log(max)
}
solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]   
   )