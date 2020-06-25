// function sum(a, b, c) {
//     return a + b + c;
// };

function curry(fn) {
    return function helper(...args) {
        if(args.length === fn.length){return fn(...args); }
        return function(...newArgs){
            return helper(...args.concat(newArgs));
        }
    };
};

//const cSum = curry(sum);

// console.log(cSum(1)(2)(3));
// console.log(cSum(1, 2)(3));
// console.log(cSum(1)(2, 3));
// console.log(cSum(1, 2, 3));

// const addThree = cSum(1)(2);
// const addFour = cSum(2)(2);

function compose(...fns){
    return function(val){

        return fns.reduceRight(function(acc, currFn){
            return currFn(acc);
        }, val);
    }
};

function getProp(name, obj){
    return obj[name];
};

function map(fn, arr){
    return arr.map(i=>fn(i));
};

function filter(pred, arr){
    return arr.filter(i=>pred(i));
};

const cGetProp = curry(getProp);
const cMap = curry(map);
const cFilter = curry(filter);

const getName = cGetProp('name');
const mapUserNames = cMap(getName);
const lengthLargerThan3 = cFilter(x=>x.length > 3);

const users = [
    {name: 'a', age: 3},
    {name: 'b', age: 4},
    {name: 'awer', age: 5},
    {name: 'arg', age: 1},
    {name: 'athss', age: 4},
];

const processUsers = compose(lengthLargerThan3, mapUserNames);
console.log(processUsers(users));

// const operations = compose(addThree, addFour);
// operations(10); 