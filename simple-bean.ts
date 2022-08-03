class Employee{
    private _id: number;
    private  _fullName: string;

    public get id(): number{
        return this._id;
    }

    public set id(value: number){
        this.id = value;
    }

    public get fullName(): string{
        return this.fullName;
    }

    public set fullName(value: string){
        this._fullName = value;
    }
}

let emp = new Employee();
console.log(`hii pooja`);
emp.id = 20;
console.log(emp);
