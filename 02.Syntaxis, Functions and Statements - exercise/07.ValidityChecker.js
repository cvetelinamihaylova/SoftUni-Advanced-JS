function solve([x1, y1, x2, y2]) {

    function comparisson([x1, y1, x2, y2]) {
        const [x, y] = [x1 - x2, y1 - y2];
        const distance = Math.sqrt(x ** 2 + y ** 2);
        let isValid = Number.isInteger(distance) ? 'valid' : 'invalid';
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`);
    }

    comparisson([x1, y1, 0, 0]);
    comparisson([x2, y2, 0, 0]);
    comparisson([x1, y1, x2, y2]);

}
solve([2, 1, 1, 1]);