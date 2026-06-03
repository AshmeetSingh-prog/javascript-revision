// DOM - 03
// Classes, IDs & Advanced DOM Methods
// =========================================

// Example HTML:
// <div id="box" class="card">
//     Hello
// </div>

// =========================================
// 1. id Property
let box = document.querySelector("#box");
console.log(box.id);
// Output:
// box

box.id = "container";
console.log(box.id);
// Output:
// container

// =========================================
// 2. className
console.log(box.className);
// Output:
// card

box.className = "card active";
console.log(box.className);
// Output:
// card active

// =========================================
// 3. classList

console.log(box.classList);
// Output:
// DOMTokenList ['card', 'active']

// =========================================
// 4. classList.add()
box.classList.add("highlight");
console.log(box.className);
// Output:
// card active highlight

// =========================================
// 5. classList.remove()
box.classList.remove("active");
console.log(box.className);
// Output:
// card highlight

// =========================================
// 6. classList.toggle()
box.classList.toggle("dark");
console.log(box.className);
// Output:
// card highlight dark

box.classList.toggle("dark");
console.log(box.className);
// Output:
// card highlight

// =========================================
// 7. classList.contains()
console.log(box.classList.contains("card"));
// Output:
// true

console.log(box.classList.contains("admin"));
// Output:
// false

// =========================================
// 8. dataset
// Example HTML:
//
// <div id="user" data-name="Ashmeet" data-age="17"></div>

let user = document.querySelector("#user");
console.log(user.dataset.name);
// Output:
// Ashmeet
console.log(user.dataset.age);
// Output:
// 17

// =========================================
// 9. cloneNode()
let copy = box.cloneNode(true);
console.log(copy);
// Output:
// Complete copy of box element

// =========================================
// 10. replaceWith()
let newHeading = document.createElement("h1");
newHeading.innerText = "New Heading";
box.replaceWith(newHeading);
// Output on webpage:
// box element replaced by h1

// =========================================
// Quick Practice
// =========================================

let card = document.querySelector(".card");
if (card) {
    card.classList.add("premium");

    console.log(card.className);

    // Output:
    // card premium
}


// =========================================
// Revision Notes
// =========================================

// id                     -> Get/Set id
// className              -> Get/Set classes
// classList              -> Class collection

// classList.add()        -> Add class
// classList.remove()     -> Remove class
// classList.toggle()     -> Add/Remove class
// classList.contains()   -> Check class

// dataset                -> Access data-* attributes

// cloneNode(true)        -> Deep copy element
// replaceWith()          -> Replace element

// insertAdjacentHTML()   -> Insert HTML
// insertAdjacentText()   -> Insert Text
// insertAdjacentElement()-> Insert Element