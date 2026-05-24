// Datatypes In JS (Are in detail later on)

// use syntax - typeof variablename, to know type of the variable

/* There are mainly 2 types of JS datatypes
1) Primitive Data Type
- String
- Number
- Boolean
- Undefined - JavaScript sets this. It means a variable is born but has no value yet.
- Null - You set this. It means the variable is intentionally empty or blank.
*/

// typeof null returns "object" due to a historical JavaScript bug; null is actually a primitive value, so check it using value === null

var x = "Hello"; // String
var num = 100; // Number 
var yes = true; // Boolean
var no = false; // Boolean
var y; // UNdefined 
var z = null ; // null 
console.log(z === null);

// Concepts of Datatypes 

var a = 15 + "Hello"
console.log(a) // 15Hello
a = "15" + "Hello"
console.log(a) // 15Hello

//Execution is from Left to right
a = 50+50+"Hello"
console.log(a) // 100HEllo
a = "Hello"+50+50
console.log(a) // HEllo5050

/* 2) Non-Primitive Datatype 
LAter In detail 
- Arrays { Array is an ordered list of values. You find items by their position number, starting at 0.Example: let colors = ["red", "blue", "green"];Best for: Lists of similar items.} 

- Object { An Object is a collection of key and value pairs. You find items by their names.Example: let car = { make: "Ford", year: 2020 };Best for: Describing a single thing with traits.
}

*/