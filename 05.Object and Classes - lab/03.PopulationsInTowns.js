function solve(arr){
const townsPopulation = {};

arr.forEach(element => {
    let [town, population] = element.split(' <-> ');
    population = Number(population);

    if(!townsPopulation.hasOwnProperty(town)){
        townsPopulation[town] = 0;
    }
    townsPopulation[town] += population ;

});
for (const town of Object.keys(townsPopulation)) {
    console.log(`${town} : ${townsPopulation[town]}`)
}
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)