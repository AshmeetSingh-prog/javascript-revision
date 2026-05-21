// Javascript Variables 

/* What does Scope means 
{
   var a = 10;
   let b = 20;
   const c = 30;
}

console.log(a); // 10
console.log(b); // Error
console.log(c); // Error
 */

/* Type - var 
var - can be redeclared and updated. Function scoped (not truly global by default). */
/* var age = 12;
var age = 24;
age = 36
console.log(age) */ /* Output - 36 */

/* Type - let 
let - variable cannot be be redeclared but can be updated. local scope variable. 
 */
/* let ageLet = 12;
ageLet = 36;
console.log(ageLet) /* output - 36 */
/*let ageLet = 24 ;
console.log(ageLet) /* Output Erro */ 

/* Type - const 
const - variable cannot be declared or or updated. A block scope variable.
*/
/* const ageConst = 45;
console.log(ageConst) */ /* Output - 45 */
/* const ageConst = 47;
console.log(ageConst) */  /* Output - error */
/* ageConst = 49;
console.log(ageConst) */   /* Output - TypeError: Assignment to constant variable.*/
