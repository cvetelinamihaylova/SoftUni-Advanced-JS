function solve(...input){
let info = {};
info = input.reduce((acc, curr)=>{
    const type = typeof curr;
    console.log(`${type}: ${curr}`);
     acc[type] = ++acc[type] || 1;
     return acc;
}, info);
Object.keys(info)
.sort((a, b)=>{return info[b] - info[a]})
.forEach(key=>{
    console.log(`${key} = ${info[key]}`)
});

}
solve({ name: 'bob'}, 3.333, 9.999)