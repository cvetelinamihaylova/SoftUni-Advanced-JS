function solve(arr){
    let [startingPoint, ...rest] = arr;
    startingPoint = +startingPoint;
    const operations = {
        chop: (num)=> {return num/2},
        dice : (num)=> {return Math.sqrt(num)},
        spice : (num)=> {return num + 1},
        bake: (num)=> {return num*3},
        fillet : (num)=> {return num - (num * 0.2)},
    }
    rest.forEach(element => {
        startingPoint = operations[element](startingPoint);
        console.log(startingPoint)
    });
}
solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])