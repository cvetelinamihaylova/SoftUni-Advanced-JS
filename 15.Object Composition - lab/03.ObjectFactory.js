function solve(str){
    let arr;
    try {
     arr = JSON.parse(str);
    } catch (error) {
        arr= [];
    }

    const template = {};
    arr.forEach((element) => {
        Object.assign(template, element);

    });
return template
}
const res = solve(`[{"prop1": 1},{"prop2":2},{"prop3":3}]`);
console.log(res)