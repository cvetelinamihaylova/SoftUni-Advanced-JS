function Spy(obj, method){
    const counter = {count: 0};

    const original = obj[method];
    obj[method]= function(){
        counter.count++;
        return original.call(this, ...arguments);
    }
    return counter
}

let obj = {
    method:(num)=>"invoked" + num,
}
let spy = Spy(obj,"method");

obj.method(5);
obj.method(6);
console.log(obj.method(6))

console.log(spy) 
