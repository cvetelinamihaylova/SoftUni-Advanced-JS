function solve(arg){
const type = typeof arg;
if(type === "number"){
const area = Math.PI*(arg*arg);
console.log(area.toFixed(2));
}else{
    console.log(`We can not calculate the circle area, because we receive a ${type}.`);
}
}