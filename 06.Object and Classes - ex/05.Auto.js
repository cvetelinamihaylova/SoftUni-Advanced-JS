function solve(arr){
const obj = arr.reduce((acc, curr) => {
    let [brand, model, qtyCars] = curr.split(' | ');
    qtyCars = +qtyCars;
    if(!acc[brand]){
        acc[brand] = {};
    }
    if(!acc[brand][model]){
        acc[brand][model] = 0;
    };
    acc[brand][model] += qtyCars;
    return acc;
}, {});

let res = '';
Object.keys(obj).forEach(key=>{
    res += `${key}\n`;
    Object.keys(obj[key]).forEach(subkey=>{
        res += `###${subkey} -> ${obj[key][subkey]}\n`;
    });
});

return res;
}
solve(['Audi | Q7 | 1000',
'Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)