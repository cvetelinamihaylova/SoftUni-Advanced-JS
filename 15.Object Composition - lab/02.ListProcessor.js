function solve(array){
const obj = {
    list: [],
    add: function(str){ return this.list.push(str)},
    remove: function(str){
        return this.list = this.list.filter(x=>x!== str);
    },
    print: function(){console.log(this.list.join(','))}
};
array.forEach(element => {
    const [command, str] = element.split(' ');
    obj[command](str);
});
};
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])