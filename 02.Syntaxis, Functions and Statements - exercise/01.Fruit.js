function solve(product, gr, price){
    const kg = gr/1000;
    const money = kg*price;
    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${product}.`);
}