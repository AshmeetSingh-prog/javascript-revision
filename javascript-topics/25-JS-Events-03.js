// =========================================
// DOM - 05
// Event Bubbling, Capturing & Delegation
// =========================================

// Example HTML:
// <div id="grandParent">
//     Grand Parent
//     <div id="parent">
//         Parent
//         <button id="child">
//             Click Me
//         </button>
//     </div>
// </div>

// =========================================
// 1. Event Bubbling
// =========================================
// Default behavior in JavaScript
let grandParent = document.getElementById("grandParent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");

grandParent.addEventListener("click", () => {
    console.log("Grand Parent Clicked");
});

parent.addEventListener("click", () => {
    console.log("Parent Clicked");
});

child.addEventListener("click", () => {
    console.log("Child Clicked");
});

// If button is clicked:

// Output:
// Child Clicked
// Parent Clicked
// Grand Parent Clicked

// Flow:
// Child → Parent → Grand Parent

// This is called Event Bubbling.

// =========================================
// 2. stopPropagation()
child.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Child Clicked");
});
// Output:
// Child Clicked
// Parent and Grand Parent
// listeners will NOT execute.

// =========================================
// 3. Event Capturing
// Capturing runs from
// Parent → Child

grandParent.addEventListener("click",() => {console.log("Grand ParentCapture")},true);

parent.addEventListener("click",() => {console.log("Parent Capture");},true);

child.addEventListener("click",() => {console.log("Child Capture");},true);

// If button clicked:

// Output:
// Grand Parent Capture
// Parent Capture
// Child Capture

// Flow:
// Grand Parent → Parent → Child
// true enables capturing phase.

// =========================================
// 4. Bubbling vs Capturing
// =========================================
// Bubbling  : Child → Parent
// Capturing : Parent → Child

// Default:
// addEventListener("click", fn)
// Bubbling

// Capturing:
// addEventListener("click", fn, true)

// =========================================
// 5. Event Delegation
// =========================================
// Instead of attaching listeners
// to many child elements,
// attach ONE listener to parent.

// Example HTML:
//
// <ul id="menu">
//     <li>Home</li>
//     <li>About</li>
//     <li>Contact</li>
// </ul>
let menu = document.getElementById("menu");
menu.addEventListener("click", (event) => {console.log(event.target.innerText);});

// Click Home

// Output:
// Home

// Click About

// Output:
// About

// Click Contact

// Output:
// Contact

// One listener handles
// all child elements.

// =========================================
// 6. Practical Delegation Example
// =========================================

// Example HTML:
//
// <ul id="tasks">
//     <li>Task 1</li>
//     <li>Task 2</li>
//     <li>Task 3</li>
// </ul>

let tasks = document.getElementById("tasks");
tasks.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(
            "Clicked:",
            event.target.innerText
        );
    }
});

// Click Task 2
// Output:
// Clicked: Task 2


// =========================================
// 7. Why Event Delegation?
// =========================================

// Bad Approach
// Attach listener to every li
// li1.addEventListener(...)
// li2.addEventListener(...)
// li3.addEventListener(...)

// Good Approach
// Parent handles all clicks
// tasks.addEventListener(...)

// Benefits:
// Less Code
// Better Performance
// Works for dynamically added elements

// =========================================
// Dynamic Element Example
// =========================================
let newTask = document.createElement("li");
newTask.innerText = "Task 4";
tasks.append(newTask);

// No new listener required
// Clicking Task 4 still works
// because parent listener handles it.

// =========================================
// Revision Notes
// =========================================

// Event Bubbling
// Child → Parent → Grand Parent

// event.stopPropagation()
// Stop Bubbling

// Event Capturing
// Grand Parent → Parent → Child

// addEventListener(type, fn, true)
// Enables Capturing

// Event Delegation
// Parent handles child events

// event.target
// Gives clicked element

// Major Benefits
// Less Memory
// Cleaner Code
// Dynamic Elements Supported

// =========================================
// Interview One-Liners
// =========================================
// Event Bubbling:
// Event travels from child to parent.

// Event Capturing:
// Event travels from parent to child.

// Event Delegation:
// Using one parent listener to
// manage events of child elements.