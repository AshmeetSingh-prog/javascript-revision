// ==========================================
// 25-JS-Async-Await.js
// Async JavaScript - Async / Await

// ==========================================
// 1. Async/Await - Definition
/*
DEFINITION:
async/await is a modern way to work with Promises.
It makes asynchronous code look and behave
more like synchronous code, making it easier
to read and write.
IMPORTANT:
- async always returns a Promise.
- await pauses execution until a Promise settles.
- await can only be used inside an async function.
Async/Await is built on top of Promises.
*/

// ==========================================
// 2. async Function
/*
DEFINITION:
The async keyword makes a function
automatically return a Promise.
SYNTAX:
async function name(){
}
*/

/*
async function greet(){
    return "Hello";
}
greet().then(data => console.log(data));
OUTPUT:
Hello
*/

// ==========================================
// 3. Returning Values from async
// =========================================
/*
async function getNumber(){
    return 10;
}
getNumber().then(num => {
    console.log(num);
});
OUTPUT:
10
*/

// ==========================================
// 4. await Keyword
/*
DEFINITION:
await waits for a Promise to complete.
Execution of the async function pauses
until the Promise is fulfilled or rejected.
SYNTAX:
let result = await promise;
*/

/*
let promise = Promise.resolve("Data Loaded");
async function getData(){
    let result = await promise;
    console.log(result);
}
getData();

OUTPUT:
Data Loaded
*/

// ==========================================
// 5. Basic Async Example
/*
function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User Data");
        }, 2000);
    });
}
async function getData(){
    let data = await fetchData();
    console.log(data);
}
getData();
OUTPUT:
(after 2 sec)
User Data
*/

// ==========================================
// 6. Multiple Awaits
/*
function task1(){
    return Promise.resolve("Task 1");
}
function task2(){
    return Promise.resolve("Task 2");
}
async function runTasks(){
    let result1 = await task1();
    let result2 = await task2();
    console.log(result1);
    console.log(result2);
}
runTasks();
OUTPUT:
Task 1
Task 2
*/

// ==========================================
// 7. Error Handling using try...catch
// ==========================================
/*
DEFINITION:
Used to handle rejected Promises.
try   -> Code that may fail
catch -> Handles error
*/

/*
async function getData(){
    try{
        let data = await Promise.reject("Network Error");
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
getData();
OUTPUT:
Network Error
*/

// ==========================================
// 8. Promise vs Async/Await
/*
// Promise
fetchData()
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});
*/

/*
// Async/Await
async function getData(){
    try{
        let data = await fetchData();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
getData();
*/

// ==========================================
// 9. Sequential Execution
/*
DEFINITION:
await waits for one Promise to finish
before moving to the next line.
*/

/*
async function test(){
    console.log("Start");
    await Promise.resolve();
    console.log("End");
}
test();
OUTPUT:
Start
End

*/
// ==========================================
// 10. Using await with setTimeout
// ==========================================
/*
function wait(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}
async function run(){
    console.log("Waiting...");
    await wait();
    console.log("Done");
}
run();
OUTPUT:
Waiting...
(after 2 sec)
Done
*/

// ==========================================
// 11. Important Rules
// ==========================================
/*
RULE 1:
await only works with Promises.
RULE 2:
await can only be used inside
an async function.
RULE 3:
async always returns a Promise.
RULE 4:
Use try...catch for error handling.
RULE 5:
Async/Await is built on Promises.
*/

// ==========================================
// 12. Most Common Real-Life Pattern
/*
async function getData(){
    try{
        let data = await fetchData();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
getData();
OUTPUT:
Depends on Promise Result
*/

// ==========================================
// 13. Important Points
// ==========================================
/*
1. async makes a function return a Promise.
2. await waits for Promise completion.
3. await can only be used inside async functions.
4. Async/Await is built on Promises.
5. Async/Await makes code easier to read.
6. try...catch handles errors.
7. Modern JavaScript mainly uses Async/Await.
8. Fetch API commonly uses Async/Await.
*/