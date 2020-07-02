function solve(){
function Person(name, email){
this.name = name;
this.email = email;
return this;
};
function Teacher(name, email, subject){
Person.call(this, name, email);
this.subject = subject;
};
Teacher.prototype = Object.create(Person.prototype)
return {
    Person,
    Teacher
}
};
let objects = solve();
let p = objects.Person.call(objects.Person, 'cvety', 'abv.bg');
let b = objects.Teacher('c', 'sdd.gf', 'JS');
console.log(p, b)