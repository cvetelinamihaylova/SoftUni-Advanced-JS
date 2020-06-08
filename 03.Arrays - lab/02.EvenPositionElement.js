function solve(arr){
    return arr.reduce((acc, curr, index)=>{
        if(index % 2 === 0){
            acc.push(curr);
        }
        return acc;
    }, [])
    .join(' ');
}
console.log(solve(['20', '30', '40']))