function solve(a,b,c){
    const first = a.length;
    const second = b.length;
    const third = c.length;

    const sum = first + second + third;
    const average = Math.floor(sum/3);
    console.log(sum);
    console.log(average);
}
solve('chocolate', 'ice cream', 'cake')