// ARRAYS IN JS

// 1. Define
// Array → Used To Store Multiple Values In One Variable
// Example
let fruits = ["Apple", "Banana", "Mango"]
console.log(fruits)
// Output
// [ 'Apple', 'Banana', 'Mango' ]

// 2. Access Elements (Index Starts From 0)
// Example
console.log(fruits[0])
console.log(fruits[1])
// Output
// Apple
// Banana

// 3. Change Values
// Example
fruits[1] = "Orange"
console.log(fruits)
// Output
// [ 'Apple', 'Orange', 'Mango' ]

// 4. Array Length
// Example
console.log(fruits.length)
// Output
// 3

// Notes
// Arrays → Ordered Collection
// Mutable → Values Can Change
// typeof Array → object

//----------------------------------------------------
// ARRAY EXTRA TOPICS (SHORT)

// 36. Sparse Arrays ⭐
// Define
// Arrays With Empty Slots
// Empty Slots ≠ undefined
// Example
let sparse = [1, , 3]
console.log(sparse)
// Output
// [1, empty, 3]

// 37. Array Holes ⭐
// Define
// Missing Elements In Array
// Some Methods Skip Them
// Example
let holes = Array(3)
console.log(holes)
// Output
// [empty × 3]

// 38. Shallow Copy ⭐⭐⭐
// Define
// Copies First Level Only
// Nested Objects Still Shared
// Example

let original =[{name:"A"}]
let copied = [...original]
copied[0].name = "Changed"
console.log(original)
// Output
// [{name:"Changed"}]

// 39. Deep Copy ⭐⭐
// Define
// Creates Fully Independent Copy
// Nested Data Also Separate
// Example
let data =[{name:"A"}]
let clone =structuredClone(data)
clone[0].name ="B"
console.log(data)
// Output
// [{name:"A"}]

// 40. Array Destructuring ⭐⭐⭐
// Define
// Extract Values Into Variables
// Example
let ranks =[1,2]
let [gold,silver] = ranks
console.log(gold)
// Output
// 1

// 41. Spread Operator (...) ⭐⭐⭐
// Define
// Expands Array Into Individual Values
// Useful For Copy And Merge
// Example
let left =[1,2]
let right =[...left]
console.log(right)
// Output
// [1,2]

// 42. Rest Parameter (...) ⭐⭐⭐
// Define
// Collects Multiple Values Into Array
// Example
function total(...nums){console.log(nums)}
total(1,2,3)
// Output
// [1,2,3]

// 43. Array Performance ⭐
// Define
// End Operations Faster
// Start Operations Usually Slower
// Example
push() //✔
// Fast
unshift() //❌
// Slower