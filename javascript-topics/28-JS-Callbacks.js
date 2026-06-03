
// JS-Callbacks.js
// Async JavaScript - Callbacks


// ==========================================
// 1. Callback - Definition
/*
DEFINITION:
A Callback is a function passed as an argument to another function,
which is executed later after a task is completed.
WHY USE CALLBACKS?
- To run code after another task finishes.
- Common in asynchronous operations.
- Helps control execution order.

SYNTAX:
function main(callback){
    callback();
}
main(myFunction);

NOTE:
Functions are passed WITHOUT ().
callback() executes the function.
*/

// ==========================================
// 2. Basic Callback
/* function greet(name, callback){
    console.log("Hello " + name);
    callback();
}
function bye(){
    console.log("Good Bye");
}
greet("Ashmeet", bye); */
/* OUTPUT:
Hello Ashmeet
Good Bye */

// ==========================================
// 3. Anonymous Callback
/* function greet(callback){
    console.log("Hello");
    callback();
}
greet(function(){
    console.log("Anonymous Callback");
}); */
/* OUTPUT:
Hello
Anonymous Callback */

// ==========================================
// 4. Arrow Function Callback

/* function greet(callback){
    console.log("Hello");
    callback();
}
greet(() => {
    console.log("Arrow Callback");
});
 */
/* OUTPUT:
Hello
Arrow Callback */

// ==========================================
// 5. Callback in Array Methods
/*
DEFINITION:
Many built-in JS methods use callbacks.
Examples:
forEach()
map()
filter()
find()
reduce()
*/
/*let arr = [1, 2, 3];
arr.forEach(function(value){
    console.log(value);
});
OUTPUT:
1
2
3
*/


// ==========================================
// 6. Asynchronous Callback
/*
DEFINITION:
A callback executed after an async operation completes.
Common APIs:
- setTimeout()
- setInterval()
- Event Listeners
- Fetch (older style)
*/
/*console.log("Start");
setTimeout(function(){
    console.log("Task Finished");
}, 2000);
console.log("End");
OUTPUT:
Start
End
(after 2 sec)
Task Finished
*/

// ==========================================
// 7. setTimeout Callback
/*
setTimeout(() => {console.log("Executed After Delay");}, 3000);

OUTPUT:
(after 3 sec)
Executed After Delay
*/


// ==========================================
// 8. Multiple Async Callbacks
// ==========================================

/*

console.log("1");

setTimeout(() => {
    console.log("2");
}, 1000);

console.log("3");

OUTPUT:
1
3
(after 1 sec)
2

*/


// ==========================================
// 9. Callback Parameters
// ==========================================

/*

function calculate(a, b, callback){
    callback(a, b);
}

calculate(10, 20, function(x, y){
    console.log(x + y);
});

OUTPUT:
30

*/


// ==========================================
// 10. Real Life Async Example

/*
function fetchData(callback){
    setTimeout(() => {
        let data = "User Data";
        callback(data);
    }, 2000);
}
fetchData(function(data){
    console.log(data);
});
OUTPUT:
(after 2 sec)
User Data
*/

// ==========================================
// 11. Callback Hell
/*
DEFINITION:
Nested callbacks inside callbacks create deeply
indented code which becomes hard to read and manage.
This problem is called Callback Hell
or Pyramid of Doom.
Problems:
- Difficult to read
- Difficult to debug
- Difficult to maintain
Solution:
- Promises
- Async/Await
*/

/*
setTimeout(() => {
    console.log("Task 1");
    setTimeout(() => {
        console.log("Task 2");
        setTimeout(() => {
            console.log("Task 3");
        }, 1000);
    }, 1000);
}, 1000);

OUTPUT:
Task 1
Task 2
Task 3

*/


// ==========================================
// 12. Important Points
// ==========================================

/*
1. Functions can be passed as arguments.

2. Callback = Function passed into another function.

3. callback() executes the callback.

4. Async operations heavily use callbacks.

5. setTimeout() and Event Listeners use callbacks.

6. Too many nested callbacks cause Callback Hell.

7. Promises and Async/Await were introduced
   to solve Callback Hell.
*/