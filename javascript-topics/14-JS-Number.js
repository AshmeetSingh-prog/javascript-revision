// ====================
// NUMBER OBJECT IN JAVASCRIPT

// 1. Number()
// Syntax: Number(value)
// Definition: Converts a value to a number.
let marksValue = "95";
console.log(Number(marksValue));
// Output: 95

// 2. toString()
// Syntax: number.toString()
// Definition: Converts a number to a string.
let ageValue = 18;
console.log(ageValue.toString());
// Output: "18"
/*
Avoid:
Number.prototype.toString.call(123)
*/

// 3. toFixed()
// Syntax: number.toFixed(digits)
// Definition: Fixes decimal places.
// Returns a STRING.
let productPrice = 99.456;
console.log(productPrice.toFixed(2));
// Output: "99.46"
/*
Edge Case:
Returns string, not number.
*/
console.log(typeof productPrice.toFixed(2));
// Output: string

// 4. parseInt()
// Syntax: parseInt(value)
// Definition: Extracts integer from string.
console.log(parseInt("123px"));
// Output: 123
console.log(parseInt("45.99"));
// Output: 45

// 5. parseFloat()
// Syntax: parseFloat(value)
// Definition: Extracts decimal number from string.
console.log(parseFloat("12.5kg"));
// Output: 12.5

// 6. Number.isNaN()
// Syntax: Number.isNaN(value)
// Definition: Checks if value is NaN.
console.log(Number.isNaN(NaN));
// Output: true
console.log(Number.isNaN(50));
// Output: false
/*
Avoid:
isNaN()
Use:
Number.isNaN()
More accurate and predictable.
*/

// 7. Number.isInteger()
// Syntax: Number.isInteger(value)
// Definition: Checks if value is an integer.
console.log(Number.isInteger(10));
// Output: true
console.log(Number.isInteger(10.5));
// Output: false

// 8. Number.MAX_VALUE
// Definition: Largest possible number in JavaScript.
console.log(Number.MAX_VALUE);
// Output: 1.7976931348623157e+308

// 9. Number.MIN_VALUE
// Definition: Smallest positive number in JavaScript.
console.log(Number.MIN_VALUE);
// Output: 5e-324

// ====================
// METHODS BETTER DONE WITH MATH
// ====================


/*
Avoid:
Custom rounding logic
Prefer:
Math.round()
Math.floor()
Math.ceil()
Math.trunc()
*/
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.trunc(4.9)); // 4

/*
Avoid:
number * number
For square roots use:
Math.sqrt()
*/
console.log(Math.sqrt(64));
// Output: 8

/*
Avoid:
Manual power calculations
Prefer:
Math.pow() or **
*/
console.log(Math.pow(2, 4));
// Output: 16

console.log(2 ** 4);
// Output: 16