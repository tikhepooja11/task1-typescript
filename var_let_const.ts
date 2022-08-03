//-------------------var variables--------------
//var follows module/function scoping and if function not found follows global scoping.

function f()  
{  
    var X = 5; //Available globally inside f()  
    if(true)  
    {  
        var Y = 10; //Available globally inside f()   
        console.log(X); //Output 5  
        console.log(Y); //Output 10  
    }      
    console.log(X); //Output 5  
    console.log(Y); //Output 10  
}  
f();  
//console.log(X); //Returns undefined because value cannot accesses from outside function  
//console.log(Y); //Returns undefined because value cannot accesses from outside function

//------------------let variable-----------------
//let follows block scoping
// The key difference between var and let is not in the syntax, but it differs in the semantics.
// The Variable declared with the let keyword are scoped to the nearest enclosing block which can be smaller than a function block.

function f1(input: boolean) {  
    let x = 100;  
    if (input) {  
        // "x" exists here        
        let y = x + 1;  
        console.log(x);
        console.log(y);
        return y;  
    }  
    // Error: "y" doesn't exist here  but "x" exist
   // return y;  
   console.log(x);
}  

//Re-declaration of let & var
//Example without let keyword:

function f2(a) {  
    var a;  
    var a;      //redeclaration & reassigned allowed
    if (true) {  
        var a;   //redeclaration allowed
    }  
}  
//Example with let keyword:

// let a = 10;  
// let a = 20; // it gives error: can't re-declare 'a' in the same scope  

//------------------const variable---------------


function constTest(){  
  const VAR = 10;  
  console.log("Output: " +VAR);  // Output: 10  
  //const VAR = 10;  //error
  console.log("Output: " +VAR);  //Uncaught TypeError: Assignment to constant variable  
}  
constTest();  



//-------------difference let & var--------------
var greeter = "hey hi";  
var times = 5;  
if (times > 3) {  
   var greeter = "Say Hello Pooja";   
}  
console.log(greeter) //Output: Say Hello Pooja  

let greeter1 = "hey hi";  
let times1 = 5;  
if (times > 3) {  
   let hello = "Say Hello Pooja";   
   console.log(hello) // Output: Say Hello Pooja  
}  
//console.log(hello) // Compile error: greeter is not defined  