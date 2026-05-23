// Conditional Statements In JS
// Used to make decisions in program
// Runs different code based on conditions
// if
// Executes only when condition is true
let age = 18;
if(age >= 18){
      console.log("Can Vote")
}

// if else
// If condition false else block runs
let marks = 40;
if(marks >= 33){
      console.log("Pass")
}
else{
      console.log("Fail")
}

// else if
// Used for multiple conditions
let score = 75;
if(score >= 90){
      console.log("Grade A")
}
else if(score >= 70){
      console.log("Grade B")
}
else{
      console.log("Grade C")
}

// Comparison Operators
// >
// <
// >=
// <=
// ==  → value check
// === → value + datatype check
// !=
// !==
console.log(10 == "10") // true
console.log(10 === "10") // false

// Logical Operators
// && → both true
// || → one true
// ! → opposite
console.log(true && false)
console.log(true || false)
console.log(!true)

// Nested if
let username = "Ash"
let pass = 123
if(username === "Ash"){
      if(pass === 123){
            console.log("Login")
      }
}

// switch
// Used when checking exact values
let day = 2
switch(day){

      case 1:
            console.log("Mon")
            break

      case 2:
            console.log("Tue")
            break

      default:
            console.log("Invalid")
}

// Ternary Operator
// Short if else
let age2 = 20
let result =
age2 >= 18 ? "Adult" : "Minor"
console.log(result)

// Truthy Values like nonempty string , natural numbers , true 
// Falsy Values like 0, "", null, undefined, NaN