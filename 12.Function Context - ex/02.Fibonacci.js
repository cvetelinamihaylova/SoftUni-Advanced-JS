function getFibonator() {
    let prev = 0;
    let current = 1;
    return function increase() {
        let next = prev + current
        prev = current;
        current = next
        return prev;
    }
};

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
