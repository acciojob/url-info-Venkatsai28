//your JS code here. If required.
// Get the current URL from the window.location object
// The 'var' keyword declares a variable with function scope
// Variables declared with 'var' are hoisted to the top of their execution context
var currentURL = window.location.href;

// Calculate the length of the URL string
// The 'const' keyword declares a block-scoped variable that cannot be reassigned
// Constants are preferred when the value won't change throughout the execution
const urlLen = currentURL.length;

// Display an alert with the URL length
// The alert() method displays a dialog box with a message and an OK button
// Template literals (backticks) allow embedding expressions using ${expression} syntax
// They provide a cleaner way to concatenate variables and strings
alert(`The length of the URL is: ${urlLen}`