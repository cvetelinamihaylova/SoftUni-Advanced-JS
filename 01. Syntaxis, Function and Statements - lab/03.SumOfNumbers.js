function solve(a,b){
    a= +a;
    b= +b;
    let result = 0;

    for (let i = a; i <= b; i++) {
        result+=i
    }

    return result;
}
console.log(solve(-8, 20))