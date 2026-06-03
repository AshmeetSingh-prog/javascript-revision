// =========================================
// DOM Events in JavaScript

// Example HTML:
//
// <button id="btn">Click Me</button>
// <input type="text" id="name">
// <form id="myForm">
//     <input type="text">
//     <button>Submit</button>
// </form>

// =========================================
// 1. addEventListener()
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    console.log("Button Clicked");
});
// Output:
// Button Clicked

// =========================================
// 2. click Event
// =========================================
btn.addEventListener("click", () => {
    console.log("Clicked");
});
// Output:
// Clicked

// =========================================
// 3. dblclick Event
// =========================================
btn.addEventListener("dblclick", () => {
    console.log("Double Clicked");
});
// Output:
// Double Clicked


// =========================================
// 4. mouseover Event
// =========================================
btn.addEventListener("mouseover", () => {
    console.log("Mouse Entered");
});

// Output:
// Mouse Entered

// =========================================
// 5. mouseout Event
// =========================================
btn.addEventListener("mouseout", () => {
    console.log("Mouse Left");
});

// Output:
// Mouse Left

// =========================================
// 6. input Event
// =========================================
let nameInput = document.getElementById("name");
nameInput.addEventListener("input", () => {
    console.log(nameInput.value);
});
// Output while typing:
// A
// As
// Ash
// Ashm

// =========================================
// 7. change Event
// =========================================
nameInput.addEventListener("change", () => {
    console.log("Value Changed");
});
// Output:
// Runs after input loses focus

// =========================================
// 8. focus Event
// =========================================
nameInput.addEventListener("focus", () => {
    console.log("Input Focused");
});
// Output:
// Input Focused

// =========================================
// 9. blur Event
// =========================================
nameInput.addEventListener("blur", () => {
    console.log("Input Unfocused");
});
// Output:
// Input Unfocused

// =========================================
// 10. keydown Event
// =========================================
nameInput.addEventListener("keydown", (event) => {
    console.log(event.key);
});
// Output:
// a
// Enter
// Shift

// =========================================
// 11. keyup Event
// =========================================
nameInput.addEventListener("keyup", (event) => {
    console.log(event.key);
});
// Output:
// a
// Enter

// =========================================
// 12. submit Event
// =========================================
let form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form Submitted");
});
// Output:
// Form Submitted


// =========================================
// Quick Revision
// =========================================

// addEventListener() -> Attach Event

// Mouse Events
// click      -> Single click
// dblclick   -> Double click
// mouseover  -> Mouse enters
// mouseout   -> Mouse leaves

// Input Events
// input      -> Every value change
// change     -> Value changed + focus lost
// focus      -> Input selected
// blur       -> Input deselected

// Keyboard Events
// keydown    -> Key pressed
// keyup      -> Key released

// Form Events
// submit     -> Form submit

// event.key             -> Pressed key
// event.preventDefault()-> Stop default action