// LOCATION OBJECT
// ==========================
// The location object contains information about the current page URL
// and can be used to navigate to another page.
// ==========================
// LOCATION PROPERTIES

// 1. location.href
// Returns the complete URL.
// Syntax: location.href;
// Example:
console.log(location.href);

// 2. location.protocol
// Returns the protocol used.
// Syntax:location.protocol;
// Example:
console.log(location.protocol);

// 3. location.hostname
// Returns the domain name.
// Syntax: location.hostname;
// Example:
console.log(location.hostname);

// 4. location.host
// Returns hostname and port number.
// Syntax: location.host;
// Example:
console.log(location.host);

// 5. location.pathname
// Returns the page path.
// Syntax: location.pathname;
// Example:
console.log(location.pathname);

// 6. location.port
// Returns the port number.
// Syntax: location.port;
// Example:
console.log(location.port);

// 7. location.search
// Returns query parameters.
// Syntax: location.search;
// Example:
console.log(location.search);

// 8. location.hash
// Returns the URL fragment (#).
// Syntax: location.hash;
// Example:
console.log(location.hash);

// 9. location.origin
// Returns protocol + domain + port.
// Syntax: location.origin;
// Example:
console.log(location.origin);

// ==========================
// LOCATION METHODS

// 1. assign()
// Loads a new page and keeps current page in history.
// Syntax: location.assign(url);
// Parameters:
// url -> Page to open
// Example:
//location.assign("https://google.com");

// 2. replace()
// Loads a new page and removes current page from history.
// Syntax: location.replace(url);
// Parameters:
// url -> Page to open
// Example:
//location.replace("https://google.com");

// 3. reload()
// Reloads the current page.
// Syntax: location.reload();
// Example:
//location.reload();

// ==========================
// NOTES
// href can also be used to redirect:
// location.href = "https://google.com";
// assign() -> Back button works.
// replace() -> Back button won't return to current page.
// reload() -> Refreshes the page.