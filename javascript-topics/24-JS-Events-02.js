// =========================================
// Event Object in JavaScript
// =========================================
// The event object contains information
// about the event that occurred.

// Example HTML:
//
// <button id="btn">Click Me</button>
// <form id="myForm"></form>

// =========================================
// 1. Basic Event Object
// =========================================
let btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {
    console.log(event);
});
// Output:
// PointerEvent {...}

// =========================================
// 2. event.type
// =========================================
btn.addEventListener("click", function (event) {
    console.log(event.type);
});
// Output:
// click

// =========================================
// 3. event.target
// =========================================
btn.addEventListener("click", function (event) {
    console.log(event.target);
});
// Output:
// <button id="btn">Click Me</button>
// Element that triggered the event

// ========================================
// 4. event.target.innerText
// =========================================
btn.addEventListener("click", function (event) {
    console.log(event.target.innerText);
});
// Output:
// Click Me

// =========================================
// 5. event.currentTarget
// =========================================
btn.addEventListener("click", function (event) {
    console.log(event.currentTarget);
});
// Output
// <button id="btn">Click Me</button>
// Element on which listener is attached

// =========================================
// 6. event.preventDefault()
// =========================================
let form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form Submission Stopped");
});
// Output:
// Form Submission Stopped
// Prevents page reload

// =========================================
// 7. event.key
// =========================================
// Example HTML:
// <input type="text" id="name">
let nameInput = document.getElementById("name");
nameInput.addEventListener("keydown", function (event) {
    console.log(event.key);
});
// Output:
// a
// Enter
// Shift

// =========================================
// 8. event.code
// =========================================
nameInput.addEventListener("keydown", function (event) {
    console.log(event.code);
});
// Output:
// KeyA
// Enter
// ShiftLeft
// Physical key pressed

// =========================================
// 9. Mouse Coordinates
// =========================================
btn.addEventListener("click", function (event) {
    console.log(event.clientX);
    console.log(event.clientY);
});
// Output:
// 250
// 180
// Mouse position in browser window

// =========================================
// 10. event.stopPropagation()
// ========================================
// Example HTML:
//
// <div id="parent">
//     <button id="child">Click</button>
// </div>
let parent = document.getElementById("parent");
let child = document.getElementById("child");
parent.addEventListener("click", () => {
    console.log("Parent Clicked");
});
child.addEventListener("click", (event) => {
    event.stopPropagation();

    console.log("Child Clicked");
});
// Output:
// Child Clicked
// Parent event will NOT run

// =========================================
// 11. Commonly Used Properties
// =========================================
btn.addEventListener("click", (event) => {
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);

});
// Output:
// click
// button element
// button element

// =========================================
// Revision Notes
// =========================================

// event                -> Event information

// event.type           -> Event name
// event.target         -> Triggered element
// event.currentTarget  -> Listener element

// event.key            -> Pressed key
// event.code           -> Physical key

// event.clientX        -> Mouse X position
// event.clientY        -> Mouse Y position

// event.preventDefault()
// Stop default browser action

// event.stopPropagation()
// Stop event bubbling