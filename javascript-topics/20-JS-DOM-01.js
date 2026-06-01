// =========================================
// DOM (Document Object Model)
// =========================================

// Example HTML:
//
// <h1 id="title">Hello</h1>
// <p class="box">Paragraph 1</p>
// <p class="box">Paragraph 2</p>


// =========================================
// 1. Selecting Elements
// =========================================

// By ID
let heading = document.getElementById("title");
console.log(heading);
// Output: <h1 id="title">Hello</h1>

// By Class Name
let boxes = document.getElementsByClassName("box");
console.log(boxes);
// Output: HTMLCollection(2) [p.box, p.box]

// By Tag Name
let paras = document.getElementsByTagName("p");
console.log(paras);
// Output: HTMLCollection(2) [p.box, p.box]

// First matching element
let firstBox = document.querySelector(".box");
console.log(firstBox);
// Output: <p class="box">Paragraph 1</p>

// All matching elements
let allBoxes = document.querySelectorAll(".box");
console.log(allBoxes);
// Output: NodeList(2) [p.box, p.box]


// =========================================
// 2. Accessing Content
// =========================================

console.log(heading.innerText);
// Output: Hello

console.log(heading.textContent);
// Output: Hello

console.log(heading.innerHTML);
// Output: Hello


// =========================================
// 3. Changing Content
// =========================================

heading.innerText = "DOM Started";

console.log(heading.innerText);
// Output: DOM Started

heading.innerHTML = "<i>DOM Started</i>";

console.log(heading.innerHTML);
// Output: <i>DOM Started</i>


// =========================================
// 4. Changing Styles
// =========================================

heading.style.color = "blue";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "40px";

// Output on webpage:
// Text becomes blue
// Background becomes yellow
// Font size becomes 40px

// =========================================
// 5. Working with Attributes
// =========================================

// Get Attribute
console.log(heading.getAttribute("id"));
// Output: title

// Set Attribute
heading.setAttribute("title", "Main Heading");
console.log(heading.getAttribute("title"));
// Output: Main Heading

// Remove Attribute
heading.removeAttribute("title");

console.log(heading.getAttribute("title"));
// Output: null


// =============================
// Revision Notes

// getElementById()         -> Single Element
// getElementsByClassName() -> HTMLCollection
// getElementsByTagName()   -> HTMLCollection
// querySelector()          -> First Match
// querySelectorAll()       -> NodeList

// innerText   -> Visible Text
// textContent -> All Text
// innerHTML   -> HTML Content

// getAttribute()    -> Read Attribute
// setAttribute()    -> Add / Update Attribute
// removeAttribute() -> Remove Attribute