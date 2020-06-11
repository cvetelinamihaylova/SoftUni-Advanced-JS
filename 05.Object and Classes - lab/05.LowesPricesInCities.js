function solve(arr) {

    const obj = {};

    arr.forEach(element => {
        let [townCurr, product, priceCurr] = element.split(' | ');
        priceCurr = + priceCurr;
        if (!obj[product]) {
            obj[product] = {};
        }
        
            obj[product][townCurr] = priceCurr;
       
    });


    let res = '';
    Object.keys(obj).forEach(key => {
        let minPrice = Number.MAX_SAFE_INTEGER;
        let minTown = "";

        Object.entries(obj[key]).forEach(([town, price]) => {
            if (price < minPrice) {
                minPrice = price;
                minTown = town;
            }

        })
        res += `${key} -> ${minPrice} (${minTown})\n`
    });
    console.log(res)
};

solve(['Sofia City | Audi | 100000',
       'Mexico City | Audi | 1000',
       'New York City | Mitsubishi | 10000',
       'New York City | Mitsubishi | 1000',
       'Mexico City | Audi | 100000'
]
);