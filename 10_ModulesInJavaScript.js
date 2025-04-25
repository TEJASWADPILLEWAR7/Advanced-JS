//  What is a Module
// A module is just a separate file in JavaScript that contains some code — usually functions, variables, or classes, that you want to reuse somewhere else.

// Why Use Modules?
// Organize Code – Tumhara code clean aur manageable banta hai.

// Reuse – Ek hi code ko bar-bar likhne ki zarurat nahi.

// Scope Isolation – Variables and functions don’t pollute the global scope.

// ------------------------------------------------------------------

// What is Module Pattern?

// Module Pattern ek tarika hai code ko organize karne ka, jisse:

// Tumhara code private bhi ho sakta hai (jaise secret),

// Aur jo chahiye sirf wahi public dikhe (jaise API).

// Ye mainly IIFE (Immediately Invoked Function Expression) aur closures ka use karta hai.

// Syntax

const counterModule = (function () {
  // Private variable
  let count = 0;

  // Private function
  function log() {
    console.log("Current Count:", count);
  }

  // Public methods
  return {
    increment: function () {
      count++;
      log();
    },
    decrement: function () {
      count--;
      log();
    },
    getCount: function () {
      return count;
    },
  };
})();

// Key Points:
// Private Scope => Variables/functions inside are hidden
// Public API => Sirf return ke through jo diya gaya wahi milega
// Uses => 	IIFE + Closure
// Real-World Use => Libraries, Reusable Components, Encapsulation

// ------------------------------------------------------------------

//  CommonJS – Mostly Node.js ke liye
//  Server-side modules ke liye bana tha
// export
module.exports = function add(a, b) {
  return a + b;
};

// import
const add = require("./add");
// Features:
// Synchronous loading (ek baar me ek hi cheez load hoti hai)

// Perfect for server-side (kyunki server pe sab file hoti hai)

// ------------------------------------------------------------------

//  AMD (Asynchronous Module Definition) – Browser ke liye
//  Client-side (browser) ke liye bana tha, jab JS badi hone lagi thi
define(["module1", "module2"], function (m1, m2) {
  // code using m1 and m2
  return {
    // public API
  };
});

// Features:
// Asynchronous loading → browser me fast loading

// Used with tools like RequireJS

// ------------------------------------------------------------------

// UMD (Universal Module Definition) – Dono ke liye
// Ye hybrid hai — chhota sa smart system jo samajhta hai:

// Agar Node.js hai → CommonJS

// Agar browser hai → AMD

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node (CommonJS)
    module.exports = factory();
  } else {
    // Browser global
    root.myModule = factory();
  }
})(this, function () {
  // Module code here
  return {
    sayHello: function () {
      console.log("Hello from UMD!");
    },
  };
});

// Features:
// Runs everywhere: Node.js, browser, CDN

// Used for creating libraries (like Lodash, Moment.js)

// ------------------------------------------------------------------

// ES6 Modules

// ES6 Modules JavaScript ka modern way hai code ko organize karne ka, jisse aap apne code ko alag-alag files mein divide kar sakte ho aur phir jahan zaroorat ho wahan use kar sakte ho.

// Basic Concepts
// Export
// Import

// ------------------------------------------------------------------
