function solve() {
    let buttons = document.querySelectorAll('exercise, button');
    let size = document.querySelectorAll('tbody tr').length;
    let validSudomu = true;
    const table = document.querySelector('table');
    const resArea = document.querySelectorAll("#check p")[0];
    let inputs = document.querySelectorAll('input')
    let handle = (e) => {
        let cells = Array.from(document.querySelectorAll('tbody input')).map(x => x.value);
        let parsedData = [];
        for (let i = 0; i < size; i++) {
            parsedData.push([...cells.slice(i * size, (i + 1) * size)]);
        }
        for (let i = 0; i < size; i++) {
            validSudomu = validSudomu ? (new Set(parsedData[i]).size === size) : false;
        }

        for (let col = 0; col < parsedData.length; col++) {
            const temp = [];
            for (let row = 0; row < parsedData.length; row++) {
                temp.push(parsedData[row][col])
            }
            validSudomu = validSudomu ? (new Set(temp).size === size) : false;

        }
        if (validSudomu) {
            table.style.border = '2px solid green';
            resArea.style.color = 'green';
            resArea.textContent = 'You solve it! Congratulations!';
        } else {
            table.style.border = '2px solid red';
            resArea.style.color = 'red';
            resArea.textContent = 'NOP! You are not done yet...';
        }
        validSudomu = true;
    }
    let reset = (e) =>{
        [...inputs].forEach(input =>{ input.value = ''});
        table.style.border = 'none';
        resArea.textContent = '';
    }
    buttons[0].addEventListener('click',handle);
    buttons[1].addEventListener('click',reset)

}