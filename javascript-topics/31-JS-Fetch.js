/*
========================================
23-JS-Fetch-API.js
========================================

Definition:
Fetch API is used to make HTTP requests
(GET, POST, PUT, DELETE) to servers.
Syntax:
fetch(url)
  .then(response => response.json())
  .then(data => {})
  .catch(error => {})
Returns:
A Promise

========================================
1. Basic GET Request
Code:
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
Output:
[
  { id: 1, name: "Leanne Graham" },
  ...
]
========================================
2. Using Async/Await
Code:
async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getUsers();

Output:
[
  { id: 1, name: "Leanne Graham" },
  ...
]

========================================
3. POST Request
Code:
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello",
    body: "World"
  })
})
  .then(response => response.json())
  .then(data => console.log(data));

Output:
{
  title: "Hello",
  body: "World",
  id: 101
}

========================================
4. Common Response Properties

response.status
response.ok
response.headers
Code:
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    console.log(response.status);
    console.log(response.ok);
  });

Output:
200
true

========================================
5. Common Methods

response.json()   // JSON data
response.text()   // Plain text
response.blob()   // Files/Images

========================================
Interview Point
========================================

fetch() does NOT reject on HTTP errors
like 404 or 500.

Check manually:
if (!response.ok) {
  throw new Error("Request Failed");
}
========================================
Modern Way (Most Used)
========================================
async function getData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Request Failed");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

========================================
Summary
========================================
fetch()           -> Send request
response.json()   -> Convert JSON to JS object
.then()           -> Handle Promise result
.catch()          -> Handle errors
async/await       -> Modern syntax
response.ok       -> Check success
response.status   -> HTTP status code
*/