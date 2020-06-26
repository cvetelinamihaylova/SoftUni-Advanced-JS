function add(num){
    function sum(x){
        num += x;
        return sum;
    };

    sum.toString = ()=>num;

    return sum;
}
let res = add(1);
console.log(res.toString())
add(1)(6)(-3)
