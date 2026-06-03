// ===================================
// JavaScript Local Storage

/*
LOCAL STORAGE
- A browser storage used to save data as key-value pairs.
- Data remains even after:
      Page Refresh
      Browser Restart
- Data is stored as Strings.
- Maximum size is usually around 5-10 MB.
Syntax:
localStorage.method(key, value)
*/

// ===================================
// 1. setItem()
/*
Purpose:
Stores data in Local Storage.
Syntax:
localStorage.setItem(key, value)
Parameters:
key   -> Name of the data
value -> Data to store
*/
/* localStorage.setItem("name", "Ashmeet"); */
// Output:
// Data Stored

// ===================================
// 2. getItem()
/*
Purpose:
Retrieves data from Local Storage.
Syntax:
localStorage.getItem(key)
Returns:
Stored value or null if key doesn't exist.
*/
/* console.log(localStorage.getItem("name")); */
// Output:
// Ashmeet

// ===================================
// 3. removeItem()
/*
Purpose:
Removes a specific key-value pair.
Syntax:
localStorage.removeItem(key)
*/
/* localStorage.removeItem("name"); */
// Output:
// "name" removed

// ===================================
// 4. clear()
/*
Purpose:
Removes all Local Storage data.
Syntax:
localStorage.clear()
*/
/* localStorage.clear(); */
// Output:
// All Local Storage data removed

// ===================================
// 5. Updating Existing Data
// ===================================
/*
If a key already exists,
setItem() overwrites the old value.
*/
/* localStorage.setItem("city", "Delhi");
localStorage.setItem("city", "Mumbai");
console.log(localStorage.getItem("city")); */
// Output:
// Mumbai

// ===================================
// 6. Storing Objects
/*
Objects cannot be stored directly.
Convert Object -> JSON String
Method:
JSON.stringify(object)
*/
/* const user = {
    name: "Ashmeet",
    age: 17
};
localStorage.setItem(
    "user",
    JSON.stringify(user)
); */

// ===================================
// 7. Retrieving Objects
/*
Convert JSON String -> Object
Method:
JSON.parse(string)
*/
/* const data =
JSON.parse(localStorage.getItem("user"));
console.log(data);
console.log(data.name);
console.log(data.age); */
// Output:
// {name: "Ashmeet", age: 17}
// Ashmeet
// 17

// ===================================
// 8. Checking If Data Exists
/*
If key does not exist,
getItem() returns null.
*/
/* if (localStorage.getItem("user")) {
    console.log("User Found");
}
else {
    console.log("User Not Found");
} */
// Output:
// User Found

// ===================================
// Important Interview Point

/*
localStorage.setItem()
→ Store data

localStorage.getItem()
→ Retrieve data

localStorage.removeItem()
→ Remove one item

localStorage.clear()
→ Remove all data

JSON.stringify()
→ Object → String

JSON.parse()
→ String → Object

Data persists after:
Refresh
Browser Close
Browser Restart
*/