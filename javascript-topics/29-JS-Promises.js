// ==========================================
// JS-Promises.js
// Async JavaScript - Promises

// ==========================================
// 1. Promise - Definition
/*
DEFINITION:
A Promise is an object that represents the eventual
completion or failure of an asynchronous operation.
Promises were introduced to solve Callback Hell
and make async code easier to manage.
A Promise can be in 3 states:
1. Pending   -> Initial state
2. Fulfilled -> Operation successful
3. Rejected  -> Operation failed
SYNTAX:
let promise = new Promise((resolve, reject) => {
    if(success){
        resolve(value);
    }
    else{
        reject(error);
    }
});
resolve() -> Success
reject()  -> Failure
*/

// ==========================================
// 2. Creating a Promise
/* let promise = new Promise((resolve, reject) => {
    resolve("Success");
});
console.log(promise); */

/* OUTPUT:
Promise { 'Success' } */

// ==========================================
// 3. Resolving a Promise
/*
let promise = new Promise((resolve, reject) => {
    resolve("Data Received");
});
promise.then((data) => {
    console.log(data);
});
OUTPUT:
Data Received
*/

// ==========================================
// 4. Rejecting a Promise
/*
let promise = new Promise((resolve, reject) => {
    reject("Network Error");
});
promise.catch((error) => {
    console.log(error);
});
OUTPUT:
Network Error
*/

// ==========================================
// 5. .then()

/*
DEFINITION:
.then() runs when the Promise is fulfilled.
SYNTAX:
promise.then((result)=>{
    // code
});
result = value passed to resolve()
*/

/*
let promise = new Promise((resolve) => {
    resolve("User Found");
});
promise.then((result) => {
    console.log(result);
});
OUTPUT:
User Found
*/

// ==========================================
// 6. .catch()
/*
DEFINITION:
.catch() runs when the Promise is rejected.
SYNTAX:
promise.catch((error)=>{
    // code
});
error = value passed to reject()
*/

/*
let promise = new Promise((resolve, reject) => {
    reject("Invalid User");
});
promise.catch((error) => {
    console.log(error);
});
OUTPUT:
Invalid User
*/

// ==========================================
// 7. .finally()
/*
DEFINITION:
.finally() runs whether the Promise is
fulfilled or rejected.
Used for cleanup tasks.
*/

/*
let promise = new Promise((resolve) => {
    resolve("Done");
});
promise
.then((data) => {
    console.log(data);
})
.finally(() => {
    console.log("Finished");
});
OUTPUT:
Done
Finished
*/


// ==========================================
// 8. Async Example using Promise
/*
let promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);
});
promise.then((data) => {
    console.log(data);
});
OUTPUT:
(after 2 sec)
Data Loaded
*/

// ==========================================
// 9. Promise Chaining
/*
DEFINITION:
The value returned from one .then()
is passed to the next .then().
This avoids Callback Hell.
*/

/*
Promise.resolve(5)
.then((num) => {
    return num * 2;
})
.then((num) => {
    return num * 3;
})
.then((num) => {
    console.log(num);
});

OUTPUT:
30
*/

// ==========================================
// 10. Callback Hell vs Promise
/*
// Callback Hell
task1(() => {
    task2(() => {
        task3(() => {
            console.log("Done");
        });
    });
});
*/

/*
// Promise Version
task1()
.then(() => task2())
.then(() => task3())
.then(() => console.log("Done"));
OUTPUT:
Done
*/

// ==========================================
// 11. Promise.resolve()
/*
DEFINITION:
Creates an already fulfilled Promise.
*/

/*
Promise.resolve("Success")
.then((data) => {
    console.log(data);
});
OUTPUT:
Success
*/

// ==========================================
// 12. Promise.reject()
/*
DEFINITION:
Creates an already rejected Promise.
*/

/*
Promise.reject("Error")
.catch((error) => {
    console.log(error);
});
OUTPUT:
Error
*/

// ==========================================
// 13. Promise.all()
/*
DEFINITION:
Runs multiple Promises together.
Returns results only when ALL succeed.
If one fails, whole Promise fails.
*/
/*
Promise.all([
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C")
])
.then((result) => {
    console.log(result);
});
OUTPUT:
["A", "B", "C"]
*/

// ==========================================
// 14. Promise.race()
// ==========================================
/*
DEFINITION:
Returns the result of the first Promise
that settles (resolve/reject).
*/
/*
Promise.race([
    new Promise(resolve =>
        setTimeout(() => resolve("A"), 2000)
    ),
    new Promise(resolve =>
        setTimeout(() => resolve("B"), 1000)
    )
])
.then((result) => {
    console.log(result);
});
OUTPUT:
B
*/

// ==========================================
// 15. Important Points
// ==========================================
/*
1. Promise represents future completion
   of an async operation.
2. States:
   - Pending
   - Fulfilled
   - Rejected
3. resolve() -> Success
4. reject() -> Failure
5. .then() handles success.
6. .catch() handles errors.
7. .finally() runs always.
8. Promise Chaining avoids Callback Hell.
9. Promise is the foundation of async/await.
10. Modern JavaScript heavily uses Promises.
*/