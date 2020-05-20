function solve(a, b, operator) {
    a = +a;
    b = +b;

    const operations = {
        '+': a + b,
        '-': a - b,
        '*': a * b,
        '/': a / b,
        '%': a % b,
        '**': a ** b
    }
    console.log(operations[operator]);
}
solve(5, 6, "+")