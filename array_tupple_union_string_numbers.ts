let fruits: string[] = ['Apple', 'Orange', 'Banana'];  
let fruits1: Array<string> = ['Apple', 'Orange', 'Banana'];  


//---diff bet for..in loop & for..of loop
let myArray = [10, 20, 30, 40, 50,];  
console.log("Output of for..in loop ");  
for (let index in myArray) {  
   console.log(index);  
}  

console.log("Output of for..of loop ");  
for (let val of myArray) {  
   console.log(val);  
} 

//forEach() array method
let apps = ['WhatsApp', 'Instagram', 'Facebook'];  
let playStore :any =[];  
  
apps.forEach(function(item){  
  playStore.push(item)  
});  
  
console.log(playStore); 

//-----------typescript map----------
let ageMapping = new Map();  
   
ageMapping.set("Rakesh", 40);  
ageMapping.set("Abhishek", 25);  
ageMapping.set("Amit", 30);  
   
//Iterate over map keys  
for (let key of ageMapping.keys()) {  
    console.log("Map Keys= " +key);          
}  
//Iterate over map values  
for (let value of ageMapping.values()) {  
    console.log("Map Values= " +value);      
}  
console.log("The Map Enteries are: ");   
//Iterate over map entries  
for (let entry of ageMapping.entries()) {  
    console.log(entry[0], entry[1]);   
}  