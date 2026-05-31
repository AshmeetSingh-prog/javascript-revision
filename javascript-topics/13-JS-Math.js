// ====================
// MATH OBJECT IN JAVASCRIPT
// provides methods for mathematical operations

// 1. Math.PI
// Syntax: Math.PI
// Definition: Returns the value of pi (π).
console.log(Math.PI);
// Output: 3.14159265358979

// 2. Math.round()
// Syntax: Math.round(number)
// Definition: Rounds a number to the nearest integer.
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5

// 3. Math.floor()
// Syntax: Math.floor(number)
// Definition: Always rounds down to the next smaller integer.
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.1)); // -5
// Edge Case:
// Negative numbers go to the smaller integer.

// 4. Math.ceil()
// Syntax: Math.ceil(number)
// Definition: Always rounds up to the next larger integer.
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(-4.9)); // -4

// 5. Math.trunc()
// Syntax: Math.trunc(number)
// Definition: Removes the decimal part.
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-4.9)); // -4

// 6. Math.abs()
// Syntax: Math.abs(number)
// Definition: Returns the absolute (positive) value.
console.log(Math.abs(-25)); // 25

// 7. Math.pow()
// Syntax: Math.pow(base, exponent)
// Definition: Raises a number to a given power.
console.log(Math.pow(2, 4)); // 16

// 8. Math.sqrt()
// Syntax: Math.sqrt(number)
// Definition: Returns the square root.
console.log(Math.sqrt(64)); // 8

// 9. Math.cbrt()
// Syntax: Math.cbrt(number)
// Definition: Returns the cube root.
console.log(Math.cbrt(27)); // 3

// 10. Math.max()
// Syntax: Math.max(value1, value2, ...)
// Definition: Returns the largest value.
console.log(Math.max(10, 20, 30, 40)); // 40

// 11. Math.min()
// Syntax: Math.min(value1, value2, ...)
// Definition: Returns the smallest value.
console.log(Math.min(10, 20, 30, 40)); // 10

// 12. Math.random()
// Syntax: Math.random()
// Definition: Returns a random decimal number between 0(inclusive) and 1(exclusive).
console.log(Math.random());
// Possible Output:
// 0.527381
// 0.892341
// Different every time

// Random number between 1 and 10
let luckyNumber = Math.floor(Math.random() * 10) + 1;
console.log(luckyNumber);
// Possible Output:
// 1 to 10

// 13. Math.sign()
// Syntax: Math.sign(number)
// Definition: Checks whether a number is positive, negative, or zero.
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0));  // 0
console.log(Math.sign(8));  // 1

// 14. Math.sin()
// Syntax: Math.sin(number)
// Definition: Returns sine value (angle in radians).
console.log(Math.sin(0)); // 0

// 15. Math.cos()
// Syntax: Math.cos(number)
// Definition: Returns cosine value (angle in radians).
console.log(Math.cos(0)); // 1

// 16. Math.tan()
// Syntax: Math.tan(number)
// Definition: Returns tangent value (angle in radians).
console.log(Math.tan(0)); // 0

// 17. Math.log()
// Syntax: Math.log(number)
// Definition: Returns natural logarithm (base e).
console.log(Math.log(10));
// Output: 2.302585092994046

// 18. Math.log10()
// Syntax: Math.log10(number)
// Definition: Returns logarithm with base 10.
console.log(Math.log10(1000)); // 3

// 19. Math.exp()
// Syntax: Math.exp(number)
// Definition: Returns e raised to the given power.
console.log(Math.exp(1));
// Output: 2.718281828459045

// ========================================
// PRACTICE PROGRAMS

// Area of Circle
let radiusValue = 5;
let circleArea = Math.PI * radiusValue ** 2;
console.log(circleArea);
// Output: 78.53981633974483

// Dice Roll
let diceValue = Math.floor(Math.random() * 6) + 1;
console.log(diceValue);
// Output: 1 to 6

// Square Root
console.log(Math.sqrt(144));
// Output: 12

// Largest Number
console.log(Math.max(25, 60, 90, 10));
// Output: 90