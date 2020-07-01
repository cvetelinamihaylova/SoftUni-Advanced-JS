function solve() {
    const object = {
        list: [],
        size: 0,
    }
    object.add = function (el) {
        object.size++;
        object.list.push(el);
        object.list = object.list.sort((a, b) => a - b);
    };
    object.remove = function (i) {
        if (!checkIndex(i)) { throw new Error('index out of bounry'); };
        object.size--;
        object.list.splice(i, 1);
    };
    object.get = function (i) {
        if (!checkIndex(i)) { throw new Error('index out of bounry'); }
        return object.list[i];
    };

    function checkIndex(i) {
        return (i < object.list.length && i >= 0) ? true : false;
    }

    return object;
};
const obj = solve();
obj.add(3);
obj.add(5);
obj.add(2);
obj.add(9);
obj.add(1);


console.log(obj.size)