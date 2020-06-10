function solve(matrix){
let isEqual = true;
for (let i = 0; i < matrix.length; i++) {
    let rowSum = matrix[i].reduce((a,b)=> { return a + b}, 0);
     let cowSum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
        const element = matrix[j][i];
        cowSum += element;
    }

    if(rowSum !== cowSum){
        isEqual = false;
        break;
    }
}
return isEqual;
}
console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]   
   ))