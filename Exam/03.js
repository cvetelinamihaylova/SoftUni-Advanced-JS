class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }
    newCustomer(ownerName, petName, kind, procedures) {
        kind = kind.toLowerCase();

        if (this.capacity == this.currentWorkload) {
            throw new Error('Sorry, we are not able to accept more patients!')
        };

        let ownerObj = this.clients.find(c => c.ownerName === ownerName);

        if (ownerObj && ownerObj.pets.find(p => p.petName === petName)) {
            let petObj = ownerObj.pets.find(p => p.petName === petName)
            if (petObj.procedures.length > 0) {
                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${petObj.procedures.join(', ')}.`)
            } else {
                petObj.procedures = procedures;
            }
        }
        if (ownerObj === undefined) {

            ownerObj = { ownerName, pets: [{ petName, kind, procedures }] };
            this.clients.push(ownerObj);
        } else {
            ownerObj.pets.push({ petName, kind, procedures })
        }


        this.currentWorkload++;
        return `Welcome ${petName}!`

    };
    onLeaving(ownerName, petName) {

        const clientObj = this.clients.find(c => c.ownerName === ownerName);
        if (clientObj === undefined) {
            throw new Error('Sorry, there is no such client!')
        }

        const petObj = clientObj.pets.find(p => p.petName === petName);

        if (petObj === undefined || petObj.procedures.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`)
        }

        const procedures = Number(petObj.procedures.length);
        this.totalProfit += (procedures * 500);
        this.currentWorkload--;
        petObj.procedures = [];
        return `Goodbye ${petName}. Stay safe!`
    };
    toString() {
        const percentage = Math.floor((this.currentWorkload / this.capacity) * 100);
        let result = `${this.clinicName} is ${percentage}% busy today!`;
        result += `\nTotal profit: ${this.totalProfit.toFixed(2)}$`;
        this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName)).forEach(clientObj => {
            result += `\n${clientObj.ownerName} with:`;
            clientObj.pets.sort((c, d) => c.petName.localeCompare(d.petName)).forEach(petObj => {
                result += `\n---${petObj.petName} - a ${petObj.kind} that needs: ${petObj.procedures.join(', ')}`
            })
        });
        return result;
    };

}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
//console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));

console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.onLeaving('Jim Jones', 'Tom'));
//console.log(clinic.onLeaving('Jim Jones', 'Tm'));


console.log(clinic.toString());
 clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
 clinic.newCustomer('gim Jones', 'Sara', 'Dog', ['A154B']);
 clinic.newCustomer('gim Jones', 'aara', 'Dog', ['A154B']);

 
 console.log(clinic.toString());
