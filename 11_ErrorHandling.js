// throw new Error => Bhai yahan kuch serious galti ho gayi hai, ab ruk jao aur error batao!

// ------------------------------------------------------------------

// Try-Catch

// JavaScript me agar koi error aata hai to pura code crash ho sakta hai.
// Lekin agar tu try...catch ka use kare, to =>

// Code safely run hota hai.

// Error aane pe bhi crash nahi karta.

// Tu error ko handle kar sakta hai.

// Syntax:

// try {
//   // risky code yahan
// } catch (error) {
//   // error aane par ye chalega
// }

// try => Risky code yahan likh
// catch => Agar error aaye to handle kar
// finally => Hamesha chalega (cleanup, logging, etc.)

// ------------------------------------------------------------------

// Problem with Async Errors

// 1. Error inside setTimeout — catch nahi hoga directly!

try {
  setTimeout(() => {
    throw new Error("Bhai error aaya timeout me!");
  }, 1000);
} catch (err) {
  console.log("Catch me aaya:", err.message);
}
//  Catch block kaam nahi karega — kyunki setTimeout async hai!

// Solution: Error handle karna async block ke andar hi

Output: setTimeout(() => {
  try {
    throw new Error("Bhai error aaya timeout me!");
  } catch (err) {
    console.log("Proper Catch:", err.message);
  }
}, 1000);

//  2. Error in Promises
// Without .catch():

new Promise((resolve, reject) => {
  reject("Promise failed!");
});
// .catch nahi hai to error uncaught jayega

//  With .catch():

new Promise((resolve, reject) => {
  reject("Promise failed!");
}).catch((err) => {
  console.log("Caught:", err);
});

// 3. Error in Async/Await

async function getUser() {
  const res = await fetch("https://invalid-url.com"); // ❌
  const data = await res.json();
  console.log(data);
}

getUser(); // Error: fetch failed

// Wrap it in try...catch

async function getUser() {
  try {
    const res = await fetch("https://invalid-url.com");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Caught in async:", err.message);
  }
}

// Summary
// setTimeout	Use try...catch inside callback
// Promises => Use .catch()
// async/await => Wrap with try...catch
// fetch API => Always use try...catch + check res.ok

// ------------------------------------------------------------------

// Extending error

// JS ka built-in Error generic hota hai. But real projects me hume specific error types chahiye hote hain jisse:

// Debugging easy ho

// Errors ko differentiate kar sake

// Custom properties add kar sake (e.g., statusCode, field, isOperational, etc.)

// Custom Error by Extending Error class =>
class ValidationError extends Error {
  constructor(message) {
    super(message); // Call parent Error constructor
    this.name = "ValidationError"; // Set custom error name
    this.statusCode = 400; // Add extra info if needed
  }
}

// Uses =>
function registerUser(user) {
  if (!user.email) {
    throw new ValidationError("Email is required!");
  }
}

try {
  registerUser({});
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Validation Error:", err.message); // Custom message
    console.log("Status Code:", err.statusCode); // Custom prop
  } else {
    console.log("Other Error:", err);
  }
}

// Real World Example =>
class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthError";
    this.statusCode = 401;
  }
}

// Example usage
try {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    throw new AuthError("Login required!");
  }
} catch (err) {
  console.log(err.name); // AuthError
  console.log(err.message); // Login required!
  console.log(err.statusCode); // 401
}

// ------------------------------------------------------------------
