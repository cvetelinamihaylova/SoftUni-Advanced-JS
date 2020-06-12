function solve(arr){
const obj = {};
const bottlesObj = {};
const bottleQty = 1000;
arr.forEach(element => {
    let [fruit, qty] = element.split(' => ');
    qty = +qty;
    if(!obj[fruit]){
        obj[fruit] = 0;
    };
    obj[fruit] += qty;
    while(obj[fruit] >= bottleQty){
        obj[fruit] -= bottleQty;
        bottlesObj[fruit] = bottlesObj[fruit] || 0;
        bottlesObj[fruit]++;
    };

});
for (const key in bottlesObj) {
    console.log(`${key} => ${bottlesObj[key]}`)
}
}
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)