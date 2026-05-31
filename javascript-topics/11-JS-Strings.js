//This file contains notes for Strings and strings methods in JS

// ================================
// 1. Strings In JavaScript
let firstName = "Ashmeet";
let lastName = "Singh";
console.log(firstName);
console.log(lastName);
/*
Ashmeet
Singh
*/

// ================================
// 2. String Declaration
let str1 = "Hello";
let str2 = 'World';
console.log(str1);
console.log(str2);
/*
Hello
World
*/

// ================================
// 3. Template Literals
let userName = "Ashmeet";
let age = 17;
let intro = `My name is ${userName} and I am ${age} years old.`;
console.log(intro);
/*
My name is Ashmeet and I am 17 years old.
*/

// ================================
// 4. String Concatenation
let first = "Java";
let second = "Script";
let full = first + second;
console.log(full);
let sentence = "I am learning " + full;
console.log(sentence);
/*
JavaScript
I am learning JavaScript
*/

// ================================
// 5. Escape Characters
let quote = "He said, \"Hello\"";
console.log(quote);
let path = "C:\\Users\\Ashmeet";
console.log(path);
let newLine = "Hello\nWorld";
console.log(newLine);
let tabSpace = "Name\tAge";
console.log(tabSpace);
/*
He said, "Hello"
C:\Users\Ashmeet
Hello
World
Name    Age
*/

// ================================
// 6. Accessing Characters
let language = "JavaScript";
console.log(language[0]);
console.log(language[1]);
console.log(language[4]);
/*
J
a
S
*/

// ================================
// 7. String Length
let course = "JavaScript";
console.log(course.length);
/*
10
*/

// ================================
// 8. Strings Are Immutable
let text = "Hello";
text[0] = "Y";
console.log(text);
/*
Output:
Hello
*/

// ================================
// 9. Primitive String vs String Object
let normalString = "Hello";
let objectString = new String("Hello");
console.log(typeof normalString);
console.log(typeof objectString);
/*
string
object
*/

// ================================
// 10. Multi-line Strings
let message = `Hello
Welcome
To JavaScript`;
console.log(message);
/*
Hello
Welcome
To JavaScript
*/

// ================================
// 11. Comparing Strings
let value1 = "apple";
let value2 = "apple";
let value3 = "Apple";
console.log(value1 === value2);
console.log(value1 === value3);
/*
true
false
*/

// ================================
// 12. String + Number
console.log("10" + 5);
console.log("Age: " + 17);
/*
105
Age: 17
*/

// ================================
// 13. Practice Example
let city = "Delhi";
let country = "India";
let locationInfo = `${city}, ${country}`;
console.log(locationInfo);
console.log(locationInfo.length);
console.log(locationInfo[0]);
/*
Delhi, India
12
D
*/

//-----------------------------------------------
//-----------------------------------------------

// ==========================================
// 1. toUpperCase()
// Syntax - string.toUpperCase()
// Converts all characters of a string to uppercase.
// Returns a NEW string.
// Original string remains unchanged. Works only on letters.
// Numbers and special characters stay unchanged.
// Strings are immutable.
// Example
let text1 = "hello world";
console.log(text1.toUpperCase());
/*
HELLO WORLD
*/

// ==========================================
// 2. toLowerCase()
// Syntax - string.toLowerCase()
// Converts all characters to lowercase.
// Returns a new string.
// Example
let text2 = "HELLO WORLD";
console.log(text2.toLowerCase());
/*
hello world
*/

// ==========================================
// 3. trim()
// Syntax - string.trim()
// Removes spaces from start and end of string.
// Does NOT remove spaces between words.
// Returns a new string.
// Example
let text3 = "   JavaScript   ";
console.log(text3.trim());
/*
JavaScript
*/

// ==========================================
// 4. slice()
// Syntax - string.slice(start, end)
// Extracts part of a string.
// Start included. End excluded.
// Supports negative indexes.
// If end is omitted, goes till end.
// Example
let text4 = "JavaScript";
console.log(text4.slice(0, 4));
console.log(text4.slice(-6));
/*
Java
Script
*/

// ==========================================
// 5. substring()
// Syntax - string.substring(start, end)
// Extracts characters between indexes.
// Negative values become 0.
// If start > end, values are swapped automatically.
// Example
let text5 = "JavaScript";
console.log(text5.substring(0, 4));
console.log(text5.substring(4, 0));
/*
Java
Java
*/

// ==========================================
// 6. replace()
// Syntax - string.replace(oldValue, newValue)
// Replaces FIRST matching value.
// Only first occurrence replaced.
// Original string unchanged.
let text6 = "I like cats. Cats are cute.";
console.log(text6.replace("cats", "dogs"));
/*
I like dogs. Cats are cute.
*/

// ==========================================
// 7. replaceAll()
// Syntax - string.replaceAll(oldValue, newValue)
// Replaces all matching values.
// Edge Cases
// Case-sensitive.
let text7 = "cat cat cat";
console.log(text7.replaceAll("cat", "dog"));
/*
Output:
dog dog dog
*/

// ==========================================
// 8. split()
// Syntax - string.split(separator)
// Converts string into array.
// split("") -> every character.
// split(" ") -> words.
let text8 = "HTML CSS JS";
console.log(text8.split(" "));
/*
["HTML", "CSS", "JS"]
*/

// ==========================================
// 9. includes()
// Syntax - string.includes(value)
// Checks whether value exists.
// Case-sensitive.
// Returns true or false.
// Example
let text9 = "JavaScript";
console.log(text9.includes("Script"));
console.log(text9.includes("script"));
/*
true
false
*/

// ==========================================
// 10. startsWith()
// Syntax - string.startsWith(value)
// Checks beginning of string. Case-sensitive.
// Example
let text10 = "JavaScript";
console.log(text10.startsWith("Java"));
/*
true
*/

// ==========================================
// 11. endsWith()
// Syntax - string.endsWith(value)
// Checks ending of string. Case-sensitive.
// Example
let text11 = "JavaScript";
console.log(text11.endsWith("Script"));
/*
true
*/

// ==========================================
// 12. charAt()
// Syntax - string.charAt(index)
// Returns character at index.
// Invalid index returns empty string.
let text12 = "JavaScript";
console.log(text12.charAt(4));
/*
Output:
S
*/

// ==========================================
// 13. indexOf()
// Syntax - string.indexOf(value)
// Definition
// Returns first occurrence index.
// Returns -1 if not found.
// Example
let text13 = "JavaScript";
console.log(text13.indexOf("a"));
console.log(text13.indexOf("z"));
/*
1
-1
*/
// ==========================================
// 14. lastIndexOf()
// Syntax - string.lastIndexOf(value)
// Definition
// Returns last occurrence index.
// Returns -1 if not found.
let text14 = "banana";
console.log(text14.lastIndexOf("a"));
/*
5
*/

// ==========================================
// 15. repeat()
// Syntax - string.repeat(count)
// Repeats string specified number of times.
// Count must be 0 or greater.
// Negative value gives error.
let text15 = "Hi ";
console.log(text15.repeat(3));
/*
Hi Hi Hi
*/