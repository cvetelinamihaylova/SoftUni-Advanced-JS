function area (){
    return this.x * this.y;
};
function vol() {
    return this.x * this.y * this.z;
};

function solve(area, vol, input){
const objectsArr = JSON.parse(input);
return objectsArr.reduce((acc, curr)=>{
    const areaObj = Math.abs(area.call(curr));
    const volObj = Math.abs(vol.call(curr));
    const res = { area: areaObj, volume: volObj};
    acc.push(res);
    return acc;
}, [])
};

console.log(solve(area, vol,
    '[{"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"},{"x":"55","y":"8","z":"0"},{"x":"100","y":"100","z":"100"},{"x":"55","y":"80","z":"250"}]'))