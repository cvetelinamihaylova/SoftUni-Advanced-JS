function solve(arr) {
const obj = {};
arr.forEach(element => {
    const [product, price] = element.split(' : ');
    obj[product] = price;
});
const sortedArr = Object.entries(obj).sort((a,b)=>{return a[0].localeCompare(b[0])});
let letter = '';
let result = '';
sortedArr.forEach(line=>{
    if(line[0][0] !== letter){
        letter = line[0][0];
        result += `${letter}\n`;
    };
    result += `  ${line[0]}: ${line[1]}\n`;

});
console.log(result)

}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)