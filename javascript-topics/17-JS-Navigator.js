// NAVIGATOR OBJECT
// The navigator object provides information about the browser and device.

// NAVIGATOR PROPERTIES

// 1. navigator.userAgent
// Returns browser information.
// Syntax: navigator.userAgent;
// Example:
console.log(navigator.userAgent);

// 2. navigator.language
// Returns the browser language.
// Syntax: navigator.language;
// Example:
console.log(navigator.language);


// 3. navigator.onLine
// Returns true if the browser is online.
// Syntax: navigator.onLine;
// Example:
console.log(navigator.onLine);


// 4. navigator.cookieEnabled
// Returns true if cookies are enabled.
// Syntax: navigator.cookieEnabled;
// Example:
console.log(navigator.cookieEnabled);


// 5. navigator.platform
// Returns the operating system platform.
// Syntax: navigator.platform;
// Example:
console.log(navigator.platform);

// 6. navigator.appName
// Returns the browser name.
// Syntax: navigator.appName;
// Example:
console.log(navigator.appName);

// 7. navigator.appVersion
// Returns browser version information.
// Syntax: navigator.appVersion;
// Example:
console.log(navigator.appVersion);

// 8. navigator.vendor
// Returns the browser vendor.
// Syntax: navigator.vendor;
// Example:
console.log(navigator.vendor);

// 9. navigator.hardwareConcurrency
// Returns the number of CPU cores available.
// Syntax: navigator.hardwareConcurrency;
// Example:
console.log(navigator.hardwareConcurrency);

// 10. navigator.maxTouchPoints
// Returns the maximum number of touch points supported.
// Syntax: navigator.maxTouchPoints;
// Example:
console.log(navigator.maxTouchPoints);

// 11. navigator.pdfViewerEnabled
// Returns true if the browser can display PDFs.
// Syntax: navigator.pdfViewerEnabled;
// Example:
console.log(navigator.pdfViewerEnabled);

// 12. navigator.webdriver
// Returns true if controlled by automation tools.
// Syntax: navigator.webdriver;
// Example:
console.log(navigator.webdriver);

// ==========================
// NAVIGATOR METHODS
// ==========================

// 1. geolocation.getCurrentPosition()
// Gets the user's current location.
// Syntax: navigator.geolocation.getCurrentPosition(successFunction);
// Parameters:
// successFunction -> Function that receives location data
// Example:
navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);
});

// ==========================
// NOTES
// ==========================
// navigator gives information about
// the browser, device, and network.
// Some properties may vary between browsers.
// Geolocation requires user permission.