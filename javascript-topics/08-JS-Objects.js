// Objects In JS
// this file covers all important concepts related to objects in JavaScript, including object creation, property access, methods, and built-in object functions.

// Object = Collection of key : value pairs

// 3 Ways To Create Objects In JS

// 1. Object Literal (Most Common)

/* let student = {
    name: "Ash",
    age: 17
}
console.log(student) */
// Output: { name: 'Ash', age: 17 }

// 2. Using new Object()

/* let user1 = new Object()
user1.name = "Pikachu"
user1.level = 100
console.log(user1) */
// Output: { name: 'Pikachu', level: 100 }



// 3. Constructor Function

/* function Person(name, age) {
    this.name = name
    this.age = age
}
let p1 = new Person("Ash", 17)
console.log(p1) */
// Output: Person { name: 'Ash', age: 17 }

// --------------------------------------------------

/* let student = {
    name: "Ashmeet",
    age: 17,
    class: 12,
    isStudent: true
}
console.log(student) */

// Output:
// { name: 'Ashmeet', age: 17, class: 12, isStudent: true }


// Access Values

/* 1)
console.log(student.name) */
// Output: Ashmeet

/* 2)
console.log(student["age"]) */
// Output: 17

// ------------------------------------

// Update Value

/* student.age = 18
console.log(student.age) */
// Output: 18

// Add New Property

/* student.city = "Delhi"
console.log(student) */
// Output:
// {
// name: 'Ashmeet',
// age: 18,
// class: 12,
// isStudent: true,
// city: 'Delhi'
// }

// ------------------------------------

// Delete Property

/* delete student.class
console.log(student) */
// Output:
// {
// name: 'Ashmeet',
// age: 18,
// isStudent: true,
// city: 'Delhi'
// }

// --------------------------------------------------

// Object Methods

/* let user = {
    name: "Ash",
    greet: function () {
        console.log("Hello")
    }
}
user.greet() */

// Output: Hello


// this Keyword
/* let person = {
    name: "Ash",
    sayName: function () {
        console.log(this.name)
    }
}
person.sayName() */
// Output: Ash

// -----------------------------------------------------

// Object Methods
// Object Methods In JS


let student = {
    name: "Ash",
    age: 17,
    city: "Delhi"
}


// 1) Object.keys()
// Returns array of all keys
console.log(Object.keys(student))
// Output:
// [ 'name', 'age', 'city' ]

// 2) Object.values()
// Returns array of all values
console.log(Object.values(student))
// Output:
// [ 'Ash', 17, 'Delhi' ]

// 3)Object.entries()
// Returns key-value pairs
console.log(Object.entries(student))
// Output:
// [
// ['name','Ash'],
// ['age',17],
// ['city','Delhi']
// ]

// 4)Object.assign()
// Object.assign({}, obj1, obj2) copies all properties from multiple objects into a brand new object {} without changing the originals, where any matching keys are overwritten by the last object on the right.
let extra = {
    hobby: "Coding"
}
let result = Object.assign({}, student, extra)
console.log(result)
// Output:
// {
// name: 'Ash',
// age: 17,
// city: 'Delhi',
// hobby: 'Coding'
// }

// 5)Object.freeze()
// Object.freeze() locks an object completely so no one can change its properties, add new keys, or delete existing ones.
Object.freeze(student)
student.age = 20
console.log(student.age) // Change ignored because object is frozen
// Output:
// 17

// 6)Object.seal()
// Allows update but no add/delete
let sealedUser = {
    name: "Pikachu"
}
Object.seal(sealedUser)
sealedUser.name = "Raichu"
sealedUser.level = 100
console.log(sealedUser)
// Output:
// { name: 'Raichu' }

// 7)Object.hasOwn()
// Object.hasOwn(obj, "key") is a tool that checks if an object has a specific property built directly into it, rather than inherited from its parents.
console.log(Object.hasOwn(student, "name"))
// Output:
// true
console.log(Object.hasOwn(student, "salary"))
// Output:
// false

// 8)Object.create()
// Creates new object
let user = {
    greet() {
        console.log("Hello")
    }
}
let obj = Object.create(user)
obj.name = "Ash"
console.log(obj.name)
// Output:
// Ash
obj.greet()
// Output:
// Hello

// 9)Object.isFrozen()
// Checks if object is frozen
let studentFrozen = {
    name: "Ash"
}
Object.freeze(studentFrozen)
console.log(Object.isFrozen(studentFrozen))
// Output: true

// 10)Object.isSealed()
// Checks if object is sealed
let person = {
    age: 17
}
Object.seal(person)
console.log(Object.isSealed(person))
// Output: true

// ------------------------------------------------------

// Remaining Object Concepts In JS

// 1. for...in Loop
// Iterate through object
let student1 = {
    name: "Ash",
    age: 17,
    city: "Delhi"
}
for (let key in student1) {
    console.log(key, student1[key])
}
// Output:
// name Ash
// age 17
// city Delhi

// 2. Object Destructuring
// Extract values into variables
let userData = {
    username: "Ash",
    level: 99
}
let { username, level } = userData
console.log(username)
console.log(level)
// Output:
// Ash
// 99

// 3. Spread Operator (...)
// Copy / Merge objects
let obj1 = {
    a: 1
}
let obj2 = {
    b: 2
}
let merged = {
    ...obj1,
    ...obj2
}
console.log(merged)
// Output:
// { a: 1, b: 2 }

// 4. Optional Chaining (?.)
// Safe property access
let person2 = {
    name: "Ash"
}
console.log(person2.address?.city)
// Output:
// undefined

// 5. Nested Objects
// Object inside object
let employee = {
    name: "Ash",
    address: {
        city: "Delhi",
        pin: 110001
    }
}
console.log(employee.address.city)
// Output:
// Delhi

// 6. JSON Methods
let data = {
    name: "Ash",
    age: 17
}

// Convert Object → JSON String
let json = JSON.stringify(data)
console.log(json)
// Output:
// {"name":"Ash","age":17}

// Convert JSON String → Object
let back = JSON.parse(json)
console.log(back)
// Output:
// { name: 'Ash', age: 17 }