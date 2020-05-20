function solve(size) {
    let output = '';
    if (size !== undefined) {
        for (let i = 0; i < size; i++) {
           output += '* '.repeat(size)+'\n';
        }
    }else{
        output += '* '.repeat(5)+'\n';
    }
console.log(output)
}

console.log(solve(5))