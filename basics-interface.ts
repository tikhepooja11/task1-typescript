//----------------------example 1-------------------
//extending two interfaces

interface Rectangle{
    height: number;
    width: number;
}
interface ColoredRectangle extends Rectangle{
    color: string;
}

const rectWithColor: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "purple"
};

function rectangleDetails(rectWithColor: ColoredRectangle): void{
    console.log(`\nRectangle details :
                 \nheight=${rectWithColor.height}
                 \nWidth=${rectWithColor.width}
                 \ncolor=${rectWithColor.color}`);
}

console.log(`\n----------example 1-------------- `);
console.log(rectWithColor);
rectangleDetails(rectWithColor);







//----------------------example 2-------------------
//multiple interface inheritance.
console.log(`\n----------example 2-------------- `);
console.log(`\n\nImplementing multiple inheritance using interfaces`);
interface Person {   
    name:string    
 }  
 interface PersonDetail {   
     age:number  
     gender:string  
 }  
 interface Employee extends Person, PersonDetail {   
     empCode:number  
 }  
 let empObject = <Employee>{};   
 empObject.name = "Abhishek"  
 empObject.age = 25   
 empObject.gender = "Male"  
 empObject.empCode = 43  
 console.log("Name: "+empObject.name);  
 console.log("Employee Code: "+empObject.empCode);  



 //---------------example 3----------------------------------
 //class implements interface

 interface Person1{
    firstName: string;
    lastName: string;
    age: number;
    fullName();
    getAge();
 }

 class Employee4 implements Person1{
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName(){
        return this.firstName + this.lastName;
    }
    getAge() {
        return this.age;
    }
    displayDetails(){
        console.log(`\n----------example 3-------------- `);
        console.log(`employee details are as follows: \n`);
        console.log(`Employee Name = ${this.fullName()} 
                    \nEmployee Age = ${this.getAge()}`);
    }
 }

 let emp4 = new Employee4('Pooja','Tikhe',24);
 emp4.displayDetails();
 

 //---------------------example 4 ----------------
 //Array Type Interface
 console.log(`-----------------example 4--------------`);

 interface nameArray{
    [index:number]: string
 }
let myNickNames: nameArray;
myNickNames =   ['pooja','aarti','sushant'];
console.log(myNickNames);

interface ageArray{
    [index: number]: number
}
let myAges: ageArray;
myAges = [10, 20, 30];
console.log(myAges);
