class Employee2{
    static fullName: string;

    static getFullName(){
        return Employee2.fullName;
    }
}

// create Employee class object
Employee2.fullName = 'Ramesh Fadatare';
console.log(Employee2.getFullName());