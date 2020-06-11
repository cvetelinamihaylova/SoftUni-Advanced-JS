class Person{
    constructor(fn, ln, age, email){
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
        this.email = email;
    }
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

const p = new Person('l', 'g', '5', 'h.vpm');
console.log(p.toString())