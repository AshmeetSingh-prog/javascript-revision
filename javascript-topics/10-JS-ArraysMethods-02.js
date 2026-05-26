// ARRAY METHODS IN JS (PART 3)

// 25. flatMap() ⭐⭐⭐
// Define
// First Runs map() On Every Element
// Then Automatically Flattens One Level
// Returns New Array
// Useful When One Element Creates Multiple Elements
// Example
let scores = [1, 2, 3]
let doubled =
scores.flatMap(
(num)=> [num, num * 2]
)
console.log(doubled)
// Output
// [1, 2, 2, 4, 3, 6]
// Special
// Flat Depth Is Only 1

// 26. at() ⭐⭐
// Define
// Access Element Using Index
// Supports Negative Index
// Negative Starts From End
// Out Of Range → undefined
// Example
let planets =
["Earth", "Mars", "Jupiter"]
console.log( planets.at(1) )
console.log(planets.at(-1))
// Output
// Mars
// Jupiter

// 27. entries() ⭐
// Define
// Returns Iterator
// Gives [index , value]
// Mostly Used In Loops
// Example
let colors =
["Red", "Blue"]
for(
let item
of colors.entries()
){
console.log(item)
}

// Output
// [0,'Red']
// [1,'Blue']

// 28. keys() ⭐
// Define
// Returns Iterator Of Indexes
// Does Not Return Values
// Example
let cities =
["Delhi", "Tokyo"]
for(
let index
of cities.keys()
){
console.log(index)
}
// Output
// 0
// 1

// 29. values() ⭐⭐
// Define
// Returns Iterator Of Values
// Similar To for...of
// Example
let fruitsBox =
["Apple", "Mango"]
for(
let value
of fruitsBox.values()
){
console.log(value)
}
// Output
// Apple
// Mango

// 30. copyWithin() ⭐
// Define
// Copies Existing Elements
// Pastes Inside Same Array
// Original Array Changes
// Does NOT Increase Length
// Syntax
// copyWithin(target,start,end)
// Example
let digits =
[1,2,3,4,5]
digits.copyWithin(0,3)
console.log(digits)
// Output
// [4,5,3,4,5]
// Explanation
// Copy From Index 3
// Paste At Index 0

// 31. Array.from() ⭐⭐⭐
// Define
// Converts Iterable Or Array Like Into Real Array
// Can Also Transform While Creating
// Example
let converted =
Array.from("HELLO")
console.log(converted)
// Output
// ['H','E','L','L','O']

// Example
let generated =Array.from([1,2,3],(x)=> x*10)
console.log(generated)
// Output
// [10,20,30]

// 32. Array.of() ⭐⭐
// Define
// Creates Array From Values
// Unlike Array()
// Single Number Does NOT Mean Length
// Example
let basket =Array.of(5)
console.log(basket)
// Output
// [5]
// Special
// Array(5)
// → Empty Slots

// 33. with() ⭐⭐
// Define
// Changes Value At Index
// Returns New Array
// Original Array Safe
// Invalid Index → Error
// Example
let temperatures =[10,20,30]
let changed =temperatures.with(1,999)
console.log(changed)
console.log(temperatures)
// Output
// [10,999,30]
// [10,20,30]

// 34. toReversed() ⭐⭐
// Define
// Same As reverse()
// Returns New Array
// Original Array Does Not Change
// Example
let queue =[1,2,3]
console.log(queue.toReversed())
console.log(queue)
// Output
// [3,2,1]
// [1,2,3]

// 35. toSpliced() ⭐⭐
// Define
// Same Work As splice()
// Returns New Array
// Original Array Safe
// Example
let stock =[10,20,30]
let updated =stock.toSpliced(1,1,100)
console.log(updated)
console.log(stock)
// Output
// [10,100,30]
// [10,20,30]
