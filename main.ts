export {}
let message = "welcome back";
console.log(message);

let x =10; //let declarations can be done without initialization
const y=20;//let declarations are always done with initialization

//when to choose what
//if you feel variable must never be assigned with a value go with const declarations
//how to declare and initalize
let isBeginner:boolean = true;
let total:number = 10;
let name :string = 'pooja';
let sentence:String= `My name is ${name}
I am a beginner in Typescript`;
console.log(sentence);
let n:null=null;
let u:undefined=undefined;
/*null,undefined are subtypes of all types - boolean,string,number
let isName :boolean = null;
let myName :string = undefined;*/

//declare array type
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

//array of different types - tupple
let person1 : [string, number, boolean] = ['pooja', 10, true];

//enum type
enum Colors {red=2,green,blue};
//let c: oneColor= Colors.green;
console.log(Colors);
console.log(Colors.green);

//use to assign different types of values - 
//any type variable - processes a value of any type & it doesn't forces to do any checking
//do any checking before we try to cancel any Call or access any properties.
let randomValue : any = 10;
randomValue = 'pooja';
randomValue = true;

let myVariable : unknown = 10;
function hasName(obj: any):obj is {name: string}{

    return !! obj &&
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(myVariable))
{
    console.log(myVariable.name);
}
(myVariable as string).toUpperCase;

//multiType type will provide intelligence support after typing multiType.
let multiType: number | string;
multiType = 20;
multiType = 'pooja';
//multiType = true; - will throw error as multiType can be only number or string but not boolean
console.log(multiType);

//any type does not provide intelligence support after typing anyType.
let anyType : any;
anyType = 20;
anyType = 'pooja';
anyType = true;
console.log(anyType);

//functions in TS
function add(num1: number, num2: number = 20): number{
    if(num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(5,10));
console.log(add(5)); //will take default value num2=20 and will consider num2 exists and solves first if instad of going to else part

// add(5,"10"); error

//optional & default parameters
//by doing num? = making it as optional/ undefined parameter 

//Interfaces in TS
function fullName(person : {firstName: string, lastName: string}){
    console.log(`first name is ${person.firstName} and last name is ${person.lastName}`);
}

let p = {
    firstName: 'pooja',
    lastName: 'tikhe'
};
fullName(p);

//but if person having so many fields then code will be clumbsy with above approach so we have interfaces in TS
interface Person{
    firstName: string;
    lastName: string;
}
function fullNameWithInterface(person: Person){
    console.log(`first name is ${person.firstName} and last name is ${person.lastName}`);
}

fullNameWithInterface(p);

//simple class example
class Employee {
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    fun1(){
        console.log(`hii you are welcome here ${this.employeeName}`);
    }

}

let emp1 = new Employee('Pooja');
console.log(emp1.employeeName);
console.log(emp1.fun1());

//inheritance
class Manager extends Employee {
    constructor(managerName:string){
        super(managerName);
        
    }
    work(){
        console.log(`manager assigning task ${this.employeeName}`);
    }
}
let m1 = new Manager('Aarti');
m1.work();
m1.fun1();
console.log(m1.employeeName);
