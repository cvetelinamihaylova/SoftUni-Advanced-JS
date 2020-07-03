function solve() {
    class Employee {
        constructor(name, age) {
            if(new.target === 'Employee'){
                throw new Error ('Cant initialize abstract class')
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currTask = this.tasks.shift();
            console.log(`${this.name} ${currTask}`);
            this.tasks.push(currTask);
        };
        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`)
        };
    }
    class Junior extends Employee {
        constructor(name, age){
            super(name, age);
            this.tasks.push('is working on a simple task.');
        }
    };

    class Senior extends Employee {
        constructor(name, age){
            super(name, age);
            this.tasks.push('is working on a complicated task.');
            this.tasks.push('is taking time off work.');
            this.tasks.push('is supervising junior workers.');
        }
    }; 

    class Manager extends Employee {
        constructor(name, age){
            super(name, age);
            this.dividend = 0;
            this.tasks.push('scheduled a meeting.');
            this.tasks.push('is preparing a quarterly report.');
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        };
    };
    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
};
const res = solve()
const e = res.Employee;
const newE = new e(' g', 's');
console.log(newE)