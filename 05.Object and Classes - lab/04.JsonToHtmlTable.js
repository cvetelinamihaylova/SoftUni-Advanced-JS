function solve(arr) {
    arr = JSON.parse(arr);
    const headings = new Set(arr.map(i => Object.keys(i)).flat());
    const headingsArr = Array.from(headings);
    let result = '<table>\n'
    result += `<tr><th>${headingsArr.join('</th><th>')}</th></tr>`
    result = arr.reduce((acc, curr) => {
        let innerRes = headingsArr.reduce((a, b) => {
            let value = curr[b];
            value = value === undefined ? '' : escapeHTML(value);
            return a += `<td>${value}</td>`;
        }, '');
        if(innerRes === ''){return acc;}
        return acc += `\n<tr>${innerRes}</tr>`
    }, result);
    result += '\n</table>';
   return result;

    function escapeHTML(str) {
        str = str.toString();
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}
solve(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'])