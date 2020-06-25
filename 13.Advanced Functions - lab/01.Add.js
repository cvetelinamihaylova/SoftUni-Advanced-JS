function solution(num){
    return function(secNum){
        return num + secNum;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
