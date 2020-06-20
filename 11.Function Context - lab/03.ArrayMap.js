function arrayMap(array, fn){
    return array.reduce((acc, curr)=>{
        const res = fn(curr);
        acc.push(res);
        return acc;
    }, [])
};
let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); 
let letters = ["a","b","c"];
console.log(arrayMap(letters,(l)=>l.toLocaleUpperCase())) 
