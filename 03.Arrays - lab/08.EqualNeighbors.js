function solve(matrix) {
    return matrix.reduce((acc, currRow, indexRow) => {
         let count = currRow.reduce((acc, curr, index) => {
            if (curr === currRow[index + 1]) {
                acc += 1;
            }
            if (curr === (matrix[indexRow + 1] || [])[index]) {
                acc += 1;
            }
            return acc;
        }, 0)
       
        return acc + count
    }, 0)
}
console.log(solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]

))