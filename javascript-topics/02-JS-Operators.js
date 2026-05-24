// Operators In JS

/* Operators are symbols that perform operations on values and variables */

/* 1) Arithmetic Operators
Used for mathematical calculations
*/

var a = 10;
var b = 5;

console.log(a + b); // Addition → 15
console.log(a - b); // Subtraction → 5
console.log(a * b); // Multiplication → 50
console.log(a / b); // Division → 2
console.log(a % b); // Modulus (Remainder) → 0
console.log(a ** b); // Exponent (10^5)


/* 2) Assignment Operators
Used to assign/update values
*/

var x = 10;

x += 5; // x = x + 5
x -= 2;
x *= 2;
x /= 2;
x %= 3;


/* 3) Comparison Operators
Return true or false
*/

console.log(10 == "10"); // true (value only)
console.log(10 === "10"); // false (value + datatype)

console.log(10 != "10"); // false
console.log(10 !== "10"); // true

console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 10); // true


/* 4) Logical Operators
Combine conditions
*/

console.log(true && false); // AND → false
console.log(true || false); // OR → true
console.log(!true); // NOT → false


/* 5) Increment / Decrement */

var n = 5;

n++; // Increment
n--; // Decrement


// Difference

var p = 5;

console.log(++p); // 6 (increase first)

var q = 5;

console.log(q++); // 5 (use first, increase later)

/******** IMPORTANT ********

==  → compares values only
=== → compares value + datatype

Prefer === in real projects

and also see a++ and ++a

**************************/


// Special Operators In JavaScript
/* 1) typeof Operator
Used to check datatype */

console.log(typeof "Hello"); // string
console.log(typeof 10); // number
console.log(typeof true); // boolean


/* 2) Ternary Operator ( ? : )
Short form of if else */

let age = 18;

console.log(age >= 18 ? "Adult" : "Minor");


/* 3) Optional Chaining ( ?. )
Prevents error if property does not exist */

let user = {
    name: "Ashmeet"
};

console.log(user?.name); // Ashmeet
console.log(user?.age); // undefined


/* 4) Nullish Coalescing ( ?? )
Uses right value only when left is null or undefined */

let value = null;

console.log(value ?? "Default"); // Default


/* 5) Spread Operator ( ... )
Expands array/object */

let arr = [1,2,3];

console.log(...arr); // 1 2 3


/* 6) Rest Operator ( ... )
Collects values */

function sum(...nums){
    console.log(nums);
}

sum(1,2,3);


/* 7) delete Operator
Removes object property */

let person = {
    age: 18
};

delete person.age;
   
console.log(person);

