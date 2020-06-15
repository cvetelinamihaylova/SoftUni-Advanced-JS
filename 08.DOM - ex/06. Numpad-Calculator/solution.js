function solve() {
    const html = {
        calcKeys: () => document.querySelector('.keys'),
        calcClear: () => document.querySelector('.clear'),
        pOutput: () => document.querySelector('#expressionOutput'),
        pResult: () => document.querySelector('#resultOutput'),
    }

    const operations = {
        '/': (a, b) => Number(a) / Number(b),
        'x': (a, b) => {return Number(a) * Number(b)},
        '-': (a, b) => Number(a) - Number(b),
        '+': (a, b) => Number(a) + Number(b),
    }
    html.calcKeys().addEventListener('click', (e) => {
        const input = e.target.textContent;
        if (input === '=') {
            const [num1, operator, num2] = html.pOutput().textContent.split(' ');
            const res = num2 === '' ? NaN : operations[operator](num1, num2);
            html.pResult().textContent = res;
            return;
        }
        html.pOutput().textContent += isNaN(Number(input)) && input !== '.'
            ? ` ${input} `
            : input;
    });

    html.calcClear().addEventListener('click', (e) => {
        html.pOutput().textContent = '';
        html.pResult().textContent = '';
    })
}