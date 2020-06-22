class Company {
    constructor() {
        this.departments = [];
    };
    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) { throw new Error('Invalid input!'); };

        let existingDepartment = this.departments.find(d => d.name === department);
        if (!existingDepartment) {
            existingDepartment = {
                name: department,
                employees: [],
                totalSalary: 0,
                averageSalary: function () {
                    return this.totalSalary / this.employees.length;
                }
            };

            this.departments.push(existingDepartment);
        };

        existingDepartment.employees.push({ name, salary, position });
        existingDepartment.totalSalary += +salary;

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    };

    bestDepartment() {
        const [bestDepartment] = this.departments.sort((a, b) => {
            return b.averageSalary.call(b) - a.averageSalary.call(a);
        });
        const averageSalary = Number(bestDepartment.averageSalary.call(bestDepartment));
        const nameDepartment = bestDepartment.name;
        let result = `Best Department is: ${nameDepartment}\nAverage salary: ${averageSalary.toFixed(2)}`;
        result = bestDepartment.employees
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .reduce((acc, curr) => {
                acc += `\n${curr.name} ${curr.salary} ${curr.position}`;
                return acc;
            }, result);

        return result;
    };
};
// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// //console.log(c.departments)
// console.log(c.bestDepartment());