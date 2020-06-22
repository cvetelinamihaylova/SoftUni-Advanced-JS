class Hex{
    constructor(value){
        this.value = value;
    };

    valueOf(){
        return this.value;
    };

    toString(){
        const hexadecimal = this.value.toString(16);
        return `0x${hexadecimal.toUpperCase()}`;
    };

    plus(input){
        let newValue = 0;
        if(typeof(input) === 'number'){
            newValue = this.value + input;
        }
        if(input instanceof Hex){
            newValue = this.value + input.value;
        }
        return new Hex(newValue);
    };

    minus(input){
        let newValue = 0;
        if(typeof(input) === 'number'){
            newValue = this.value - input;
        }
        if(input instanceof Hex){
            newValue = this.value - input.value;
        }
        return new Hex(newValue);
    };

    parse(hexa){
        return parseInt(hexa, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1 == 256);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(a.parse('FF'))