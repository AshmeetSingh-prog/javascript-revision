// Loops In JavaScript

// Loops = Repeat a block of code again and again

// _______________________________________________

// for loop
// Used when number of iterations is known

/* for(let i = 1; i <= 5; i++){
    console.log(i);
}
 */

// Output
/*
1
2
3
4
5
*/

// --------------------------------------

// while loop
// Runs until condition becomes false

/* let a = 1;

while(a <= 5){
    console.log(a);
    a++;
} */

// --------------------------------------

// do while loop
// Runs at least one time

/* let b = 10;

do{
    console.log(b);
    b++;
}
while(b <= 5); */

// Output → 10

// --------------------------------------

// break
// Stops loop immediately

/* for(let i = 1; i <= 10; i++){

    if(i === 5){
        break;
    }

    console.log(i);
} */

// Output
/*
1
2
3
4
*/

// --------------------------------------

// continue
// Skip current iteration

/* for(let i = 1; i <= 5; i++){

    if(i === 3){
        continue;
    }

    console.log(i);
} */

// Output
/*
1
2
4
5
*/

// --------------------------------------

// Infinite loop
// Condition never becomes false

/*
while(true){
    console.log("Hello");
}
*/

// Avoid running 

// --------------------------------------

// Nested Loop
// Loop inside loop

/* for(let i = 1; i <= 3; i++){

    for(let j = 1; j <= 2; j++){

        console.log(i , j);

    }

} */

// Output
/*
1 1
1 2
2 1
2 2
3 1
3 2
*/

// Special Loops In JavaScript

// --------------------------------------

// for...in loop
// Gives KEYS / INDEXES
// Mostly used for Objects

/* let student = {
    name : "Ashmeet",
    class : 12,
    marks : 90
};

for(let key in student){

    console.log(key);

}
 */
// Output
/*
name
class
marks
*/

// Access values
/*for(let key in student){

    console.log(key , student[key]);

} */

// Output
/*
name Ashmeet
class 12
marks 90
*/

// --------------------------------------

// for...in with Array
// Gives INDEX

/* let fruits = ["Apple","Mango","Banana"];

for(let index in fruits){

    console.log(index);

} */

// Output
/*
0
1
2
*/

// --------------------------------------

// for...of loop
// Gives VALUES
// Mostly used for Arrays and Strings

/*let colors = ["Red","Blue","Green"];

for(let value of colors){

    console.log(value);

}*/

// Output
/*
Red
Blue
Green
*/

// --------------------------------------

// for...of with String

/*let name = "JS";

for(let char of name){

    console.log(char);

}*/

// Output
/*
J
S
*/

// --------------------------------------

// Difference

/*
for...in  → Keys / Index

for...of  → Values
*/

// Easy memory trick

/*
IN  → Index

OF  → Value OF collection
*/