abstract class Employee1 {
    name: string;
    paymentPerHour: number;

    constructor(name: string, paymentPerHour: number){
        this.name = name;
        this.paymentPerHour = paymentPerHour;
    }

    public abstract calculateSalary(): number;
}

class Contractor extends Employee1{
    workingHours: number;
    constructor(name: string, paymentPerHour: number, workingHours: number)
    {
        super(name, paymentPerHour);
        this.workingHours = workingHours;
    }

    calculateSalary(): number {
        return this.paymentPerHour * this.workingHours;
    }
}

class FullTimeEmployee extends Employee1{
    constructor(name: string, paymentPerHour: number){
        super(name, paymentPerHour);
    }

    calculateSalary(): number {
        return this.paymentPerHour * 8;
    }
}


let contractor: Employee1; //as emp obj cannot be created create its reference
let fulltimeEmp: Employee1;

contractor = new Contractor('contractor1',20,5);
fulltimeEmp = new FullTimeEmployee('fulltimeEmp1',10);

console.log(contractor.calculateSalary());
console.log(fulltimeEmp.calculateSalary());