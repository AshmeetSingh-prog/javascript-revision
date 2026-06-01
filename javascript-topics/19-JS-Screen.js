// ==========================
// SCREEN OBJECT
// The screen object provides information about the user's screen.
// ==========================
// SCREEN PROPERTIES

// 1. screen.width
// Returns the total screen width.
// Syntax: screen.width;
// Example:
console.log(screen.width);

// 2. screen.height
// Returns the total screen height.
// Syntax: screen.height;
// Example:
console.log(screen.height);

// 3. screen.availWidth
// Returns the available screen width.
// Syntax: screen.availWidth;
// Example:
console.log(screen.availWidth);

// 4. screen.availHeight
// Returns the available screen height.
// Syntax: screen.availHeight;
// Example:
console.log(screen.availHeight);

// 5. screen.colorDepth
// Returns the color depth in bits.
// Syntax: screen.colorDepth;
// Example:
console.log(screen.colorDepth);

// 6. screen.pixelDepth
// Returns the pixel depth of the screen.
// Syntax: screen.pixelDepth;
// Example:
console.log(screen.pixelDepth);

// 7. screen.orientation
// Returns information about screen orientation.
// Syntax: screen.orientation;
// Example:
console.log(screen.orientation);

// 8. screen.orientation.type
// Returns the orientation type.
// Syntax: screen.orientation.type;
// Example:
console.log(screen.orientation.type);

// 9. screen.orientation.angle
// Returns the screen rotation angle.
// Syntax: screen.orientation.angle;
// Example:
console.log(screen.orientation.angle);

// ==========================
// NOTES
// ==========================
// width & height -> Total screen size
// availWidth & availHeight
// -> Usable screen size excluding taskbar, dock, etc.
// colorDepth
// -> Number of bits used to display colors
// orientation
// -> Useful for mobile devices