function subtract() {
    const html = {
        firstNumInput: () => document.querySelector('#firstNumber'),
        secondNumInput: () => document.querySelector('#secondNumber'),
        resultDiv: () => document.querySelector('#result')
    }
    const firstNum = Number(html.firstNumInput().value);
    const secondNum = Number(html.secondNumInput().value);

    html.resultDiv().textContent = firstNum - secondNum;

}