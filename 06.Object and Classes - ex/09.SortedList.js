class List {
    constructor() {
        this._list = [];
        this.size = 0;
    }
    add(num) {
        this._list.push(num);
        this._list.sort((a, b) => a - b);
        this.size++;
    }
    remove(index) {
        this._validataIndex(index);
        this._list.splice(index, 1);
        this.size--;
    }
    get(index) {
        this._validataIndex(index);
        return this._list[index];
    }

    _validataIndex(index) {
        if (index < 0 || index >= this._list.length) {
            throw new Error('Index out of boundry')
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list._list)
console.log(list.get(1)); 
list.remove(1);
console.log(list._list)
list.remove(1);
console.log(list._list)
console.log(list.get(1));
