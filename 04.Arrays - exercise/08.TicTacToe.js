function solve(array) {
    const ticTac = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    for (let i = 0; i < array.length; i++) {
        let [row, col] = array[i].split(' ');
        let player = i % 2 === 0 ? 'X' : 'O';
        if (ticTac[row][col] === false) {
            ticTac[row][col] = player;
        } else {
            console.log('This place is already taken. Please choose another!');
        }
        if (findWinner(ticTac).isEqual) {
            console.log(`Player ${findWinner(ticTac).winner.next().value} wins!`)
            break;
        }
        findWinner(ticTac);
    }
    function findWinner(matrix) {

        let res = {
            isEqual: false,
            winner: ''
        };

        for (let i = 0; i < matrix.length; i++) {
            let rowCalc = new Set(matrix[i]);
            if (rowCalc.size === 1 && !rowCalc.has(false)) {
                res.isEqual = true;
                res.winner = matrix[i][0];
                break;
            }
            let cowSum = [];
            for (let j = 0; j < matrix[i].length; j++) {
                const element = matrix[j][i];
                cowSum.push(element);
            }
            cowSum = new Set(cowSum);
            if (cowSum.size === 1 && !rowCalc.has(false)) {
                res.isEqual = true;
                res.winner = cowSum.values();
                break;

            }

            let diagonal1 = [];
            let diagonal2 = [];

            for (let i = -1; i < matrix.length - 1; i++) {
                let element = matrix[i + 1];
                for (let j = i; j < element.length; j++) {
                    const num = element[j + 1];
                    const numTwo = element[element.length - (j + 2)];
                    diagonal2.push(numTwo);
                    diagonal1.push(num)
                    break;
                }

            }
            diagonal1 = new Set(diagonal1);
            if (diagonal1.size === 1 && !rowCalc.has(false)) {
                res.isEqual = true;
                res.winner = diagonal1.values();
                break;

            }
            diagonal2 = new Set(diagonal2);
            if (diagonal2.size === 1 && !rowCalc.has(false)) {
                res.isEqual = true;
                res.winner = diagonal2.values();
                break;

            }


        }
        return res;
    }
    ticTac.forEach(row => {
        console.log(row.join('\t'))
    })

}
solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]

)