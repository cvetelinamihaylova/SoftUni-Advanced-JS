function solve(arr){
const obj = {};
for (let i = 0; i < arr.length; i+=2) {
    const town = arr[i];
    const income = +arr[i + 1]
    if(!obj.hasOwnProperty(town)){
        obj[town] = 0;
    }
    obj[town] += income;
}
console.log(JSON.stringify(obj))
}
solve(['Sofia','20','Varna','3','Sofia','5','Varna','4'])