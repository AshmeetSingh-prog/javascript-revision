// Functions In JavaScript
// Function = Block of code that can be reused
// Function Declaration

/* function greet(){
    console.log("Hello");
}
greet();
greet(); */

// Output
/*
Hello
Hello
*/

// --------------------------------------
// Function with Parameters
// Parameters = Input values

/* function greet(name){
    console.log("Hello " + name);
}
greet("Ashmeet");
greet("JS"); */

// Output
/*
Hello Ashmeet
Hello JS
*/

// --------------------------------------

// Function with Return
// return = Send value back

/* function add(a , b){
    return a + b;
}
let result = add(10 , 20);
console.log(result); */

// Output
/*
30
*/

// --------------------------------------

// Function Expression
// Store function in variable

/* let message = function(){
    console.log("Function Stored");
}
message(); */

// Output
/*
Function Stored
*/

// --------------------------------------

// Arrow Function
// Short way to write function

/* let greet = () => {
    console.log("Hello");
}
greet(); */

// Output
/*
Hello
*/

// --------------------------------------

// Arrow Function with Return

/* let square = (num) => {
    return num * num;
}
console.log(square(5)); */

// Output
/*
25
*/

// --------------------------------------

// Default Parameters

/* function greet(name = "User"){
    console.log(name);
}
greet();
greet("Ashmeet"); */

// Output
/*
User
Ashmeet
*/

// --------------------------------------

// Function Calling Another Function

/* function one(){
    console.log("One");
}
function two(){
    one();
}
two(); */

// Output
/*
One
*/

// --------------------------------------

// Difference

/*
Parameter - Value received
Argument - Value passed
*/

// Example
/*
function greet(name) < Parameter
greet("Ashmeet") < Argument
*/

// --------------------------------------

// Important

/*
Function - Define

Function() - Call
*/