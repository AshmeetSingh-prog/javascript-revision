// WINDOW OBJECT (BOM)
// ==========================
// The window object is the global object of the browser.
// All browser features are available through window.
// Example:
//console.log(window);

// ==========================
// WINDOW METHODS

// 1. alert()
// Shows a message box with an OK button.
// Syntax: window.alert(message);
// Example:
//window.alert("Hello");

// 2. prompt()
// Takes input from the user.
// Syntax: window.prompt(message, defaultValue);
// Example:
//let name = window.prompt("Enter your name", "Guest");

// 3. confirm()
// Asks user for confirmation.
// Returns true (OK) or false (Cancel).
// Syntax: window.confirm(message);
// Example:
//let result = window.confirm("Delete file?");

// 4. open()
// Opens a new browser tab or window.
// Syntax:window.open(url, target, features);
// Parameters:
// url -> Page to open
// target -> Where to open (_blank = new tab, _self = same tab)
// Example:
//window.open("https://google.com", "_blank");

// 5. close()
// Closes the current window.
// Usually works only on windows opened by JS.
// Syntax: window.close();
// Example:
//window.close();

// 6. print()
// Opens the print dialog box.
// Syntax: window.print();
// Example:
//window.print();

// 7. setTimeout()
// Runs code once after a delay.
// Syntax: setTimeout(function, timeInMs);
// Example:
/* setTimeout(() => {
    console.log("Hello");
}, 2000); */

// 8. clearTimeout()
// Stops a setTimeout before it executes.
// Syntax: clearTimeout(timeoutId);
// Example:
/* let id = setTimeout(() => {
    console.log("Hello");
}, 2000);
clearTimeout(id); */

// 9. setInterval()
// Runs code repeatedly after a fixed interval.
// Syntax: setInterval(function, timeInMs);
// Example:
/* setInterval(() => {
    console.log("Running");
}, 1000); */

// 10. clearInterval()
// Stops a setInterval.
// Syntax: clearInterval(intervalId);
// Example:
/* let id = setInterval(() => {
    console.log("Running");
}, 1000);
setTimeout(() => {clearInterval(id)}, 5500 ) */

// ==========================
// COMMON WINDOW PROPERTIES
// ==========================
// window.innerWidth
// Browser viewport width
// Example:
console.log(window.innerWidth);

// window.innerHeight
// Browser viewport height
// Example:
console.log(window.innerHeight);

// window.scrollX
// Horizontal scroll position
// Example:
console.log(window.scrollX);

// window.scrollY
// Vertical scroll position
// Example:
console.log(window.scrollY);

// ==========================
// NOTES

// alert(), prompt(), confirm()
// are actually:
// window.alert()
// window.prompt()
// window.confirm()
// Writing "window." is optional.