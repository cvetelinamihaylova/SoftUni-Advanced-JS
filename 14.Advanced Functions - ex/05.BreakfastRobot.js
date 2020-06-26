function solution() {
    const ingridients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };
    return function (input) {


        let [command, ...rest] = input.split(' ');
        if (command === 'report') {
            return `protein=${ingridients.protein} carbohydrate=${ingridients.carbohydrate} fat=${ingridients.fat} flavour=${ingridients.flavour}`;

        }

        if (command === 'restock') {
            let [ingr, qty] = rest;
            qty = +qty;
            ingridients[ingr] += qty;
            return 'Success';
        }
        if (command === 'prepare') {
            let [recipe, qty] = rest;
            qty = +qty;
            let needs = Object.assign({}, recipes[recipe]);
            Object.keys(needs).forEach(k => needs[k] *= qty);
            const message = checkQty(needs, ingridients);
            if (message === 'Success') {
                deductQty(needs);
            }
            return message;
        }
        function checkQty(needent, availability) {
            let result;
            for (let key in needent) {
                const needentQty = needent[key];
                if (availability[key] < needentQty) {
                    result = `Error: not enough ${key} in stock`;
                    break;
                }
            }
            return result = result || 'Success';
        }
        function deductQty(needent) {
            for (let key in needent) {
                const needentQty = needent[key];
                ingridients[key] -= needentQty;
            }
        }
    }
}

let manager = solution();

console.log(manager('restock protein 100')) //, 'Success'],
console.log(manager('restock carbohydrate 100')) //, 'Success'],
console.log(manager('restock fat 100')) //', 'Success'],
console.log(manager('restock flavour 100')) //, 'Success'],
console.log(manager('report')) //, 'protein=100 carbohydrate=100 fat=100 flavour=100'],
console.log(manager('prepare eggs 2')) //, 'Success'],
console.log(manager('report')) //, 'protein=90 carbohydrate=100 fat=98 flavour=98'],
console.log(manager('prepare eggs 1')) //, 'Success'],
console.log(manager('report')) //, 'protein=85 carbohydrate=100 fat=97 flavour=97']

