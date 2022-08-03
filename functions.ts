//types of function - 1.named 2.anonymous

//1.Named function
//Function Definition  
function display() {  
    console.log("Hello JavaTpoint!");  
}   
display();  


//2.Anonymous function
// Anonymous function  
let myAdd = function (x: number, y: number) : number {  
    return x + y;  
};   
console.log(myAdd(5,3));  

//Function Parameter - 1.optional 2.default 3.rest
  
//1.optional
function showDetails(id:number,name:string,e_mail_id?:string) {   
    console.log("ID:", id, " Name:",name);   
    if(e_mail_id!=undefined)    
    console.log("Email-Id:",e_mail_id);   
 }  
 showDetails(101,"Virat Kohli");  
 showDetails(105,"Pooja","pooja@buyerassist.com");

 //2.Default Parameter
 function displayName(name: string, greeting: string = "Hello") : string {  
    return greeting + ' ' + name + '!';  
}  
console.log(displayName('Pooja'));   //Returns "Hello Pooja!"  
console.log(displayName('Pooja', 'Hi'));   //Returns "Hi Pooja!".  
console.log(displayName('Sachin'));    //Returns "Hello Sachin!"  

//3.Rest Parameter -used to pass zero or more values to a function
// Rules to follow in rest parameter:

// Only one rest parameter is allowed in a function.
// It must be an array type.
// It must be the last parameter in a parameter list.

// The TypeScript compiler will create an array of arguments with the rest parameter
//  so that all array methods can work with the rest parameter. The rest parameter is useful, 
//  where we have an undetermined number of parameters.

function sum(a: number, ...b: number[]): number {  
    let result = a;  
    for (var i = 0; i < b.length; i++) {  
    result = result + b[i];  
    }  
    return result;  
  }  
  let result1 = sum(3, 5);  
  let result2 = sum(3, 5, 7, 9);  
  console.log(result1 +"\n" + result2);  

//------------------------------------------------------------------



// ES5: Without arrow function  
var summation1 = function(a: number, b: number) {  
    return a + b;  
}  
console.log(summation1(20, 30)); //returns 50

//ES6: Arrow function with parameter
let summation = (a: number, b: number): number => {  
            return a + b;  
}  
console.log(summation(20, 30)); //returns 50  

//use of arrow function
// the sum is an arrow function,
// "a: number, b: number" is a parameter type,
// ": number" is the return type,
// the arrow notation => separates the function parameter and the function body.

//Arrow function without a parameter

let Print = () => console.log("Hello Pooja!");  
Print();   //it seperates/ delinks function parameters from function body

//if the function body consists of only one statement, then there is no need of the curly brackets and the return keyword.
let sum2 = (a: number, b: number) => a + b;  
console.log("SUM: " +sum2(5, 15));  


//real time arrow function example
class Student {  
    studCode: number;  
    studName: string;  
    constructor(code: number, name: string) {  
            this.studName = name;  
            this.studCode = code;  
    }  
    showDetail = () => console.log("Student Code: " + this.studCode + '\nStudent Name: ' + this.studName)  
}  
let stud = new Student(101, 'Pooja Tikhe');  
stud.showDetail();  


//-----------------function overloading--------------
//Function overloading with a different number of parameters and different types along with the same function name is not supported.

// function display(x:number, y:number):void //Compiler Error: Duplicate function implementation  
// {  
//     console.log(x + x);  
// }  
  
// function display(x:string): void //Compiler Error: Duplicate function implementation  
// {  
//     console.log(x);  
// }  

//string parameter  
function add(a:string, b:string): string;  
//number parameter  
function add(a:number, b:number): number;  
//Function Definition  
function add(a: any, b:any): any {  
    return a + b;  
}  
console.log("Addition: " +add("Hello ", "Pooja"));   
console.log("Addition: "+add(30, 20));  