// ARRAY METHODS IN JS (PART 1)

// 1. push() ⭐
// Define
// Adds Element(s) At End
// Returns New Length
// Special
// Can Add Multiple Values
// arr1.push(4, 5)
// Example
let arr1 = [1, 2]
console.log(arr1.push(3))
console.log(arr1)
// Output
// 3
// [1, 2, 3]

// 2. pop() ⭐
// Define
// Removes Last Element
// Returns Removed Element
// Special
// Empty Array → undefined
// Example
let arr2 = [10, 20, 30]
console.log(arr2.pop())
console.log(arr2)
// Output
// 30
// [10, 20]

// 3. unshift() ⭐
// Define
// Adds Element(s) At Start
// Returns New Length
// Example
let arr3 = [2, 3]
console.log(arr3.unshift(1))
console.log(arr3)
// Output
// 3
// [1, 2, 3]

// 4. shift() ⭐
// Define
// Removes First Element
// Returns Removed Element
// Special
// Empty Array → undefined
// Example
let arr4 = [10, 20, 30]
console.log(arr4.shift())
console.log(arr4)
// Output
// 10
// [20, 30]

// 5. concat() ⭐
// Define
// Combines Arrays
// Original Array Not Changed
// Special
// Can Join Values Also
// Example
let a = [1, 2]
let b = [3, 4]
console.log(a.concat(b))
console.log(a)
// Output
// [1,2,3,4]
// [1,2]

// 6. includes() ⭐
// Define
// Checks If Value Exists
// Returns true / false
// Special
// Case Sensitive
// Example
let arr6 = [10, 20, 30]
console.log(arr6.includes(20))
console.log(arr6.includes(100))
// Output
// true
// false

// 7. indexOf() ⭐
// Define
// Returns First Index Of Value
// Not Found → -1
// Example
let arr7 = [10, 20, 10]
console.log(arr7.indexOf(10))
// Output
// 0

// 8. lastIndexOf()
// Define
// Returns Last Matching Index
// Example
let arr8 = [10, 20, 10]
console.log(arr8.lastIndexOf(10))
// Output
// 2

// 9. reverse() ⭐
// Define
// Reverses Original Array
// Special
// Original Array Changes
// Example
let arr9 = [1, 2, 3]
console.log(arr9.reverse())
// Output
// [3, 2, 1]

// 10. join()
// Define
// Converts Array Into String
// Special
// Default Separator → comma
// Example
let arr10 = ["A", "B", "C"]
console.log(arr10.join("-"))
// Output
// A-B-C
// Special
// Default Separator → comma

// 11. slice() ⭐
// Define
// Copies Part Of Array
// Original Array Not Changed
//slice(start,end)
// Special
// Negative Index Allowed
// Example
let arr11 = [10, 20, 30, 40]
console.log(arr11.slice(1, 3))
console.log(arr11)
// Output
// [20,30]
// [10,20,30,40]

// 12. splice() ⭐⭐⭐
/* javascriptarray.splice(start, deleteCount, item1, item2, ...)
Key Uses
1) Remove elements: arr.splice(2, 1) removes one element at index 2.
2)Add elements: arr.splice(2, 0, 'new') adds 'new' at index 2 without deleting anything.
3)Replace elements: arr.splice(1, 1, 'ay') replaces the element at index 1 with 'ay'.
Quick Examples 1)Delete: [1, 2, 3, 4].splice(1, 2) becomes [1, 4].
2)Insert: [1, 2, 4].splice(2, 0, 3) becomes [1, 2, 3, 4]. */
// Example
let arr12 = [10, 20, 30]
arr12.splice(1, 1, 100)
console.log(arr12)
// Output
// [10,100,30]

//----------------------------------------------------
// ARRAY CALLBACK PARAMETERS ⭐⭐⭐
// Define
// Many Array Methods Accept A Function
// JS Automatically Sends Values To That Function
// Parameters Are Optional
// Order Matters

// 13. Callback Parameters
// Syntax
array.method((value,index,array)=>{})
// value → Current Element
// index → Position Of Current Element
// array → Entire Original Array
// Example 1
let numbers = [10, 20, 30]
numbers.forEach((value,index,array)=>{console.log(value)
console.log(index)
console.log(array)})
// Output
// 10
// 0
// [10,20,30]

// 20
// 1
// [10,20,30]

// 30
// 2
// [10,20,30]

// 13) 1.Using Only value
// Example
let scores =[1,2,3]
let doubled =scores.map((value)=>value*2)
console.log(doubled)
// Output
// [2,4,6]

// 13) 2. Using value + index
// Example
let levels =[10,20,30]
let result =levels.map((value,index)=>value+index)
console.log(result)
// Output
// [10,21,32]

// 14) 3. Using value + index + array
// Example
let prices =[100,200,300]
prices.forEach((value,index,array)=>{console.log(value,index,array.length)})
// Output
// 100 0 3
// 200 1 3
// 300 2 3

// 13) 4.reduce() Callback ⭐⭐⭐
// Define
// reduce Uses Different Parameters
// acc Stores Previous Result
// Syntax
array.reduce((acc,value,index,array)=>{},initialValue)
// acc → Previous Result
// value → Current Element
// index → Current Index
// array → Entire Array

// Example
let bills =[10,20,30]
let total =bills.reduce((acc,value)=>acc+value,0)
console.log(total)
// Output
// 60

// ARRAY METHODS IN JS (PART 2)

// 13. forEach() ⭐⭐⭐
// Define
// Runs Function On Every Element
// Does NOT Return New Array
// Cannot Break Or Stop Early
// Original Array Changes Only If You Modify It
// Example
let arr13 = [10, 20, 30]
arr13.forEach((value)=>{
    console.log(value)
})
// Output
// 10
// 20
// 30

// 14. map() ⭐⭐⭐
// Define
// Creates New Array By Transforming Every Element
// Original Array Does Not Change
// Returned Value Becomes New Element
// Example
let arr14 = [1, 2, 3]
let result = arr14.map((x)=> x * 2)
console.log(result)
// Output
// [2, 4, 6]

// 15. filter() ⭐⭐⭐
// Define
// Creates New Array With Only Elements That Pass Condition
// Returns Empty Array If Nothing Matches
// Example
let arr15 = [10, 25, 40]
let result2 = arr15.filter((x)=> x > 20)
console.log(result2)
// Output
// [25, 40]

// 16. find() ⭐⭐⭐
// Define
// Returns First Element Matching Condition
// Stops Searching After Match
// No Match → undefined
// Example
let arr16 = [10, 25, 40]
console.log(
arr16.find((x)=> x > 20)
)
// Output
// 25

// 17. findIndex()
// Define
// Returns Index Of First Match
// No Match → -1
// Example
let arr17 = [10, 25, 40]
console.log(
arr17.findIndex((x)=> x > 20)
)
// Output
// 1

// 18. some() ⭐⭐
// Define
// Returns true If At Least One Element Matches
// Stops Immediately After First Match
// Empty Array → false
// Example
let arr18 = [10, 20, 30]
console.log(
arr18.some((x)=> x > 25)
)
// Output
// true

// 19. every() ⭐⭐
// Define
// Returns true Only If All Elements Match
// Stops At First Failure
// Empty Array → true
// Example
let arr19 = [10, 20, 30]
console.log(
arr19.every((x)=> x > 5)
)
// Output
// true

// 20. reduce() ⭐⭐⭐
// Define
// Combines Entire Array Into Single Value
// Can Return Number String Object Or Anything
// acc stands for accumulator.
// acc holds the result from the previous step.
// value is the current item in the array.
// Empty Array Without Initial Value → Error
// Example
let arr20 = [10, 20, 30]
let sum =
arr20.reduce(
(acc, value)=> acc + value,
0
)
console.log(sum)
// Output
// 60

// 21. sort() ⭐⭐⭐
// Define
// Sorts Elements Of Original Array
// By Default Converts Values Into Strings
// Numbers Need Compare Function
// Changes Original Array

// Example 1 (Default Sorting)
let arr21 = [5, 20, 100, 2]
arr21.sort()
console.log(arr21)
// Output
// [100, 2, 20, 5]
// Explanation
// Compared As Strings
// "100" comes before "2"

// Example 2 (Number Sorting Ascending)
let arr211 = [5, 20, 100, 2]
arr211.sort((a,b)=> a-b)
console.log(arr211)
// Output
// [2, 5, 20, 100]
// Explanation
// Negative → a first
// Positive → b first

// Example 3 (Descending)
let arr2111 = [5, 20, 100, 2]
arr2111.sort((a,b)=> b-a)
console.log(arr2111)
// Output
// [100, 20, 5, 2]

// 22. toSorted() ⭐⭐
// Define
// Same As sort()
// Returns New Sorted Array
// Original Array Does NOT Change
// Use When Original Data Must Stay Safe
// Example
let arr22 = [5, 20, 100, 2]
let sorted =
arr22.toSorted(
(a,b)=> a-b
)
console.log(sorted)
console.log(arr22)
// Output
// [2, 5, 20, 100]
// [5, 20, 100, 2]

// 23. fill() ⭐
// Define
// Replaces Existing Elements With Same Value
// Can Fill Entire Array Or Selected Range
// Changes Original Array
// Syntax
// fill(value)
// fill(value, start)
// fill(value, start, end)

// Example 1 (Whole Array)
let arr23 = [1, 2, 3, 4]
arr23.fill(0)
console.log(arr23)
// Output
// [0, 0, 0, 0]


// Example 2 (Partial Fill)
let arr233 = [1, 2, 3, 4, 5]
arr233.fill(9, 1, 4)
console.log(arr233)
// Output
// [1, 9, 9, 9, 5]
// Explanation
// Start Included
// End Excluded

// Example 3
let arr2333 = Array(5)
arr2333.fill("A")
console.log(arr2333)
// Output
// ['A','A','A','A','A']

// 24) flat() ⭐⭐
// Define
// Removes Nesting From Arrays
// Returns New Array
// Original Array Does NOT Change
// Default Depth = 1
// Infinity Removes All Nesting
// Special
// If Array Already Flat
// Returns Copy
// Syntax
// flat(depth)
// Example 1
let arr24 = [1,[2,3]]
console.log(
arr24.flat()
)
// Output
// [1,2,3]

// Example 2
let arr244 = [1,[2,[3]]]
console.log(
arr244.flat(2)
)
// Output
// [1,2,3]

// Example 3
let arr2444 = [1,[2,[3,[4]]]]
console.log(
arr2444.flat(Infinity)
)
// Output
// [1,2,3,4]
// Special
// If Array Already Flat
// Returns Copy
