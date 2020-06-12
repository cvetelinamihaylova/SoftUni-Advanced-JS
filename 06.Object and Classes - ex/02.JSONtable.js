function solve(arr){
    let res = '<table>\n';
arr.forEach(element => {
    const obj = JSON.parse(element);
res += `\t<tr>\n\t\t<td>${obj.name}</td>\n\t\t<td>${obj.position}</td>\n\t\t<td>${obj.salary}</td>\n\t</tr>\n`
});
res += '</table>';
console.log(res)
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
)