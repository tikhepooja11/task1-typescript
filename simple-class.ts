console.log("First Assigned tasks - TYPESCRIPT");

//creating a simple typescript class
class Employee
{
    id: number;
    firstName: string;
    lastName: string;

    constructor(id: number, firstName: string, lastName: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName+" "+this.lastName;
    }

}

//create employee obj
export
let emp = new Employee(1,'Pooja','Tikhe'); //parameterised constructor
console.log(emp);
console.log(emp.getFullName());

