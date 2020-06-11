
function returnPersons(){
    class Person{
        constructor(fn = undefined, ln = undefined, age = undefined, email = undefined){
            this.firstName = fn;
            this.lastName = ln;
            this.age = age === undefined ? undefined : +age;
            this.email = email;
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    
    return [
        new Person('Anna', 'Simpson', '22',	'anna@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Johnson', '25'),
        new Person('Gabriel', 'Peterson', '24',	'g.p@gmail.com'),


    ]
}