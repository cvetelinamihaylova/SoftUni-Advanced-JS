function solve(arr){
    let sum = 0;
    let sum2 = 0;
    let concatenate = '';

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        sum += current;
        sum2 += 1/current;
        concatenate += current;
    }

    console.log(sum);
    console.log(sum2);
    console.log(concatenate);

}