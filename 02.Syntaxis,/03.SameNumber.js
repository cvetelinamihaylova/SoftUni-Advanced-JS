function solve(num) {
    const textNum = num.toString();
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < textNum.length; i++) {
        const current = textNum[i];
        const next = textNum[i+1];
        sum += Number(current);
        if(current !== next && next !== undefined){
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);

}

solve(2222)