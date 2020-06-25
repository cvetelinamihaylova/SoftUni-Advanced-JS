function solve(){
    const api = {
        string: '',
        append: function(str){return this.string += str;},
        removeStart: function(num){return this.string = this.string.substring(num);},
        removeEnd: function(num){return this.string = this.string.substring(0, this.string.length - num);},
        print: function(){console.log(this.string);},

    }

    // Object.defineProperty(this, 'append', {
    //     set(str){
    //         api.string += str;
    //     }
    // });
    // Object.defineProperty(this, 'removeStart', {
    //     set(num){
    //         api.string = api.string.substr(0, num);
    //     }
    // });
    // Object.defineProperty(this, 'removeEnd', {
    //     set(num){
    //         api.string = api.string.substr(api.string.length - num);
    //     }
    // });
    // Object.defineProperty(this, 'print', {
    //     get(){
    //         console.log(api.string);
    //     }
    // });
    return api
}

// let firstZeroTest = solve();

// firstZeroTest.append = 'hello';
// firstZeroTest.removeStart = 3;
// firstZeroTest.removeEnd = 4;	
// firstZeroTest.print;	

let secondZeroTest = solve();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();	
