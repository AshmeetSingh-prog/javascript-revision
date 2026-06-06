// DOM - 02
// Traversing DOM & Creating Elements
// =========================================

// Example HTML:
//
// <div id="parent">
//     <h1>Heading</h1>
//     <p>Paragraph</p>
//     <button>Click Me</button>
// </div>

// =========================================
// 1. parentElement
let para = document.querySelector("p");
console.log(para.parentElement);
// Output:
// <div id="parent">...</div>

// =========================================
// 2. children
let parent = document.getElementById("parent");
console.log(parent.children);
// Output
// HTMLCollection(3) [h1, p, button]

// =========================================
// 3. firstElementChild
console.log(parent.firstElementChild);
// Output:
// <h1>Heading</h1>

// =========================================
// 4. lastElementChild
console.log(parent.lastElementChild);
// Output:
// <button>Click Me</button>

// =========================================
// 5. nextElementSibling
let heading = document.querySelector("h1");
console.log(heading.nextElementSibling);
// Output:
// <p>Paragraph</p>

// =========================================
// 6. previousElementSibling
console.log(para.previousElementSibling);
// Output:
// <h1>Heading</h1>

// =========================================
// 7. createElement()
let newHeading = document.createElement("h2");
console.log(newHeading);
// Output
// <h2></h2>

// =========================================
// 8. Adding Content
newHeading.innerText = "New Heading";
console.log(newHeading.innerText);
// Output
// New Heading

// =========================================
// 9. append()
// Adds element at END
parent.append(newHeading);
// Output on webpage:
// <div id="parent">
//     <h1>Heading</h1>
//     <p>Paragraph</p>
//     <button>Click Me</button>
//     <h2>New Heading</h2>
// </div>

// =========================================
// 10. prepend()
// Adds element at START
let newPara = document.createElement("p");
newPara.innerText = "Prepended Paragraph";
parent.prepend(newPara);
// Output on webpage:
//
// <div id="parent">
//     <p>Prepended Paragraph</p>
//     <h1>Heading</h1>
//     <p>Paragraph</p>
//     <button>Click Me</button>
// </div>

// =========================================
// 11. remove()
newPara.remove();
// Output:
// Prepended paragraph removed

// =========================================
// 12. appendChild()
// Older Method
let span = document.createElement("span");
span.innerText = "Hello";
parent.appendChild(span);
// Output:
// Span added at end

// .after() Method in JavaScript
// =========================
// Definition:
// Inserts one or more nodes AFTER a specified element.
// Syntax:
// element.after(node1, node2, ...);

// Example 1: Insert Element
const para = document.getElementById("para");
const heading = document.createElement("h2");
heading.textContent = "New Heading";
para.after(heading);

/*
Before:
<p id="para">Hello</p>

After:
<p id="para">Hello</p>
<h2>New Heading</h2>
*/
// 1. Inserts content AFTER the element.
// 2. Does not insert inside the element.
// 3. Can insert elements and text.
// 4. Modern and shorter alternative to:
//    insertAdjacentElement("afterend", node)

// =========================================
// Revision Notes

// parentElement         -> Parent of element
// children              -> All child elements
// firstElementChild     -> First child
// lastElementChild      -> Last child
// nextElementSibling    -> Next element
// previousElementSibling-> Previous element

// after() -> Inserts one or more nodes AFTER a specified element
// createElement() -> Create new element
// append()        -> Add at end
// prepend()       -> Add at beginning
// appendChild()   -> Older append method
// remove()        -> Delete element