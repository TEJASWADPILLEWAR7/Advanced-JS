// Pure Function => A function that for the same input always gives the same output, and does NOT cause any side effects.

// Rule =>
// Same Input → Same Output
// No Side Effects

// ------------------------------------------------------------------

// Idempotence => Idempotent operation wo hai jo chahe ek baar karo ya sau baar, output hamesha same rahe.
// Side effects nahi badhte, predictable behavior hota hai

// ------------------------------------------------------------------

// Imperative vs Declerative
//  Imperative:
// Tu bolta hai cook ko:

// “Pehle gas on karo, fir tel daalo, ab pyaaz bhuno, ab masala daalo…”

// 🧾 Declarative:
// Tu bolta hai:

// “Bhaiya ek masaledaar paneer curry bana do!”
// Cook samajh jaata hai kaise karna hai.

// ------------------------------------------------------------------

// Imnutability => Immutability means not changing the original value, instead return a new one with changes.

let arr = [1, 2, 3];
let newArr = [...arr, 4]; // spread operator se naya array banaya
console.log(arr); // [1, 2, 3]
console.log(newArr); // [1, 2, 3, 4]

// Immutable Methods in JS:
// .map()
// .filter()
// .concat()
// spread (...)

// ------------------------------------------------------------------

// Partial Application
// Partial Application is when a function is given some of its arguments in advance, and it returns another function which takes the rest of the arguments later.

// Soch ek sandwich maker hai:

function makeSandwich(bread, filling, sauce) {
  return `${bread} bread sandwich with ${filling} and ${sauce}`;
}

// Ab agar tu hamesha White bread use karta hai, to baar baar bread likhne se acha hai ek preset function bana le.

const withWhiteBread = makeSandwich.bind(null, "White");

console.log(withWhiteBread("Paneer", "Mayo"));
// Output: "White bread sandwich with Paneer and Mayo"
// Yeh hi hai Partial Application!
// Tu kuch arguments fix kar deta hai (like "White"), baaki badme deta hai.

// ------------------------------------------------------------------

// Memoization
// Memoization is an optimization technique where we store the result of expensive function calls and return the cached result when the same inputs occur again.

function memoizedFactorial() {
  let cache = {}; // memory (MCI 💡)

  return function factorial(n) {
    if (n in cache) {
      console.log("Fetching from cache:", n);
      return cache[n];
    } else {
      console.log("Calculating for:", n);
      if (n === 0 || n === 1) return 1;
      cache[n] = n * factorial(n - 1);
      return cache[n];
    }
  };
}

const fact = memoizedFactorial();

console.log(fact(5)); // Calculates
console.log(fact(5)); // Uses cache

// MCI stands for:

// M → Memory: Store previous results

// C → Cache: Quickly access those stored results

// I → Improve performance: Avoid redoing work

// ------------------------------------------------------------------

// Compose aur Pipe
// Multiple functions ko chain karna — jisme output of one function becomes input of next.

// Compose: Right to Left

// Pipe: Left to Right

// Pipe

const pipe =
  (
    ...fns //(...fns) means: "Jitne bhi functions pass karoge, unko ek array fns mein store kar lo."
  ) =>
  (val) =>
    fns.reduce((acc, fn) => fn(acc), val);

const banayiBiryani = pipe(chawalUthao, masalaLgao, dumPeRakho, serveKaro);

console.log(banayiBiryani("Start =>"));

//  Compose

const compose = (f, g) => (data) => g(data);
const multiply3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiply3, makePositive);

console.log(makePositive(-50));

// ------------------------------------------------------------------

// Arity = number of arguments a function is designed to take.
// Ek function kitne arguments accept karta hai, uski count.
