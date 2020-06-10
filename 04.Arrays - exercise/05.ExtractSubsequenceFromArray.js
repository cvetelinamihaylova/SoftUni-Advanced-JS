function solve(array) {
    let biggest = Number.MIN_SAFE_INTEGER;
    const result = [];
    array.map(n => {
        if (biggest <= n) {
            biggest = n;
            result.push(biggest);
        }
    });
return result.join('\n')
}
console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
))