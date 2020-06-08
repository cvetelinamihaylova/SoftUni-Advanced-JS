function solve(a, b) {
    let divisor = 1;
    const smallest = Math.min(a, b);
    for (let i = 1; i <= smallest; i++) {
        if (a % i == 0 && b % i == 0) {
            divisor = i;
        }
    };
    console.log(divisor)
}

