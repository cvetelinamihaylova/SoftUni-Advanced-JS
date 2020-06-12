function solve(arr) {
    const resArr = [];
    arr.forEach(element => {
        let [name, level, items] = element.split(' / ');
        items = items ? items.split(', ') : [];
        const obj = {};
        obj.name = name;
        obj.level = +level;
        obj.items = items;

        resArr.push(obj);
    });
    return JSON.stringify(resArr)
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)