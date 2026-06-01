// HISTORY OBJECT
// ==========================
// The history object is used to access the browser's session history.

// HISTORY PROPERTIES

// 1. history.length
// Returns the number of pages in the session history.
// Syntax: history.length;
// Example:
//console.log(history.length);

// ==========================
// HISTORY METHODS

// 1. back()
// Goes back one page in history.
// Syntax: history.back();
// Example:
//history.back();

// 2. forward()
// Goes forward one page in history.
// Syntax: history.forward();
// Example:
//history.forward();


// 3. go()
// Moves to a specific page in history.
// Syntax: history.go(number);
// Parameters: number -> Pages to move (+ forward, - back)
// Example:
//history.go(-2);

// ==========================
// NOTES
// history.back()   = history.go(-1)
// history.forward() = history.go(1)
// Works only if history exists.
// Cannot access URLs for security reasons.