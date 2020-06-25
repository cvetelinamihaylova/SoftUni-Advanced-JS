// function* generateSqrtNumbers(){
//     let n = 0;
//     while(true){
//         n++;
//         yield n * n;
//     }
// };
// const squareNums = generateSqrtNumbers();
// console.log(squareNums)
// console.log(squareNums.next());
// console.log(squareNums.next());
// console.log(squareNums.return());


function* generateRandomNames(array){
    const available = array;
    while(available.length > 0){
        const randomIndex = Math.floor(Math.random() * available.length);
        const value = available[randomIndex];
        available.splice(randomIndex, 1);
        yield value
    }
};

const names = ['Alli', 'Marie', 'Dany', 'Sansa', 'Deneris'];

const uniqueNames = generateRandomNames(names);

for(let name of uniqueNames){
    console.log(name);
}