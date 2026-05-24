// Function Methods + this In JavaScript
// _______________________________________________

// What is this ?
// this = Refers to the object
// that is currently calling the function

// Means:
// "Who called me?"

// _______________________________________________

// Normal Example
/* let user = {
    name : "Ashmeet",
    greet : function(){
        console.log(this.name);
    }
};
user.greet(); */

// Output
/*
Ashmeet
*/

// Explanation

/*
this = user
because user called greet()
*/

// --------------------------------------

// Problem Without this

/* function greet(){
    console.log(this.name);
}
greet(); */

// Output
/*
undefined
*/
// Why ?
/*
No object called function
so this has no name
*/

// --------------------------------------

// call()

// Used to manually set this
// Executes immediately

/* function greet(city){
    console.log(
        this.name,
        city
    );
}
let user = {
    name : "Ashmeet"
};
greet.call(
    user,
    "Delhi"
); */

// Output
/*
Ashmeet Delhi
*/

// Explanation

/*
call()
this = user
*/

// --------------------------------------

// apply()

// Same as call()
// But arguments in array

/* function greet(city,age){
    console.log(
        this.name,
        city,
        age
    );
}
let user = {
    name : "Ashmeet"
};
greet.apply(
    user,
    ["Delhi",17]
); */

// Output
/*
Ashmeet Delhi 17
*/

// --------------------------------------

// bind()

// Sets this
// Returns new function
// Does not run immediately

/* function greet(){
    console.log(
        this.name
    );
}
let user = {
    name : "Ashmeet"
};
let x =
greet.bind(user);
x(); */

// Output
/*
Ashmeet
*/

// Explanation

/*
bind()

Returns function
Run later
*/

// --------------------------------------

// Why do we need these ?

/*

Without call()

greet()

→ this lost


With call()

greet.call(user)

→ this becomes user

Useful when:
Borrow method
Control object
Event handling
Timers
DOM

*/

// --------------------------------------

// toString()

// Converts function into string

/* function add(){
    return 10+20;
}
console.log(
    add.toString()
); */

// Output
/*
Function code as text
*/

// --------------------------------------

// Difference

/*
call()
Run now

apply()
Run now
(Array)

bind()
Run later

toString()
Convert to text

*/
// Easy Memory Trick
/*
this
→ Who called me

call
→ Call now

apply
→ Array

bind
→ Bind later
*/

//Test -1 
function show(){
    console.log(this.name);
}
let user = {
    name : "Ashmeet"
};
show.call(user);

//Test -2
function intro(city,age){
    console.log(
        this.name,
        city,
        age
    );
}
let user1 = {
    name : "Ashmeet"
};
intro.apply(user1,["Delhi","18"])

//Test -3

function show(){
    console.log(
        this.name
    );
}
let user2 = {
    name : "Ashmeet"
};
let later = show.bind(user2)
later();
later();

//Final BOss 
function greet(){
    console.log(
        this.name
    );
}
let user3 = {
    name : "Ashmeet",
    greet
};
let x = user3.greet; // Correct code to get "Ashmeet" --->  let x = user3.greet.bind(user3) OR greet.bind(user3) Both are correct bcs user3.greet = greet()
x(); // output = Undefines 
user3.greet(); // Ashmeet
greet.call(user3); // Ashmeet

//----------------------------------------------

// Callback Function In JavaScript

// Callback = Function passed as argument
// and executed later

// _______________________________________________

// Normal Function

/* function greet(){

    console.log("Hello");

}

greet(); */

// Output
/*
Hello
*/

// --------------------------------------

// Callback Function

/* function greet(fun){

    fun();

}

function hello(){

    console.log("Hello");

}

greet(hello); */

// Output
/*
Hello
*/

// Explanation

/*

greet(hello)

↓

hello passed into greet

↓

fun()

↓

hello()

*/

// --------------------------------------

// Callback with Parameters

/* function calculate(a,b,operation){

    operation(a,b);

}

function add(x,y){

    console.log(x+y);

}

calculate(
    10,
    20,
    add
); */

// Output
/*
30
*/

// --------------------------------------

// Callback using Arrow Function

/* function run(fun){

    fun();

}

run(()=>{

    console.log("Running");

}); */

// Output
/*
Running
*/

// --------------------------------------

// Real Use Example

/* setTimeout(function(){

    console.log("Executed");

},3000); */

// Output after 3 sec
/*
Executed
*/

// Explanation

// --------------------------------------

// Why Callback ?
/*
Pass behaviour
Run later
Reusable code
*/
// --------------------------------------
// Difference
/*

greet()
↓
Run function

greet(hello)
↓
Pass function

greet(hello())
↓
Run then pass

*/

// --------------------------------------

// Important

/*
hello
→ Function


hello()
→ Function execution

*/