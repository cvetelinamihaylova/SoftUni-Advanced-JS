function solve(arr) {
    const smallest = arr.sort((a, b) => { return a - b }).slice(0, 2).join(' ')
    console.log(smallest);
}
solve([30, 15, 50, 5, 5, 2])