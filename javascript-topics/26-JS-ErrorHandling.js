// ================================
// JavaScript Error Handling

// 2. catch
// Runs if an error occurs inside try
/* try {
    console.log(num); // num is not defined
}
catch (error) {
    console.log("Error Caught");
} */
// Output:
// Error Caught

// 3. Error Object
// Gives information about the error
/* try {
    console.log(num);
}
catch (error) {
    console.log(error.name);    // ReferenceError
    console.log(error.message); // num is not defined
} */

// 4. finally
// Runs whether error occurs or not
/* try {
    console.log("Try Block");
}
catch (error) {
    console.log("Catch Block");
}
finally {
    console.log("Finally Block");
}
 */
// Output:
// Try Block
// Finally Block

// 5. throw
// Create your own custom error
let age = 15;
try {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }
    console.log("Eligible");
}
catch (error) {
    console.log(error.message);
}
// Output:
// Age must be 18 or above

// 6. Custom Validation Example
let password = "123";
try {
    if (password.length < 6) {
        throw new Error("Password too short");
    }
    console.log("Valid Password");
}
catch (error) {
    console.log(error.message);
}
// Output:
// Password too short

// ================================
// Most Important Interview Points
// try      -> Code that may cause error
// catch    -> Handles the error
// finally  -> Always executes
// throw    -> Creates custom error
// error.name    -> Error type
// error.message -> Error description