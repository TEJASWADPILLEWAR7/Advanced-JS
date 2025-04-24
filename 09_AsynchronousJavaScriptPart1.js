// How does Javascript work ?

// JavaScript is a single-threaded, asynchronous, non-blocking, and event-driven language that runs inside browsers and Node.js using an engine (like V8 in Chrome).

// V8 ke parts:
// Memory Heap → jagah jahan variables/data store hote hain

// Call Stack → line-by-line execution

// JavaScript is single-threaded, so ek time pe ek hi kaam karta hai!

//  Event Loop

// Jo bhi asynchronous kaam complete ho jata hai (like timeout), wo Callback Queue mein chala jata hai. Event Loop dekhta hai jab Call Stack khali ho, tab queue se kaam uthata hai.

//  Behind the Scenes — Components

// JS Engine (V8)	=> Code ko compile & execute karta hai
// Call Stack	Function calls track karta hai
// Memory Heap	Variables, objects yahan store hote hain
// Web APIs	setTimeout, fetch, DOM events, etc.
// Callback Queue	Async functions jab ready hote hain to yahan jate hain
// Event Loop	Stack khali hote hi callback queue se kaam uthata hai

// ------------------------------------------------------------------

// Promise
// A Promise is a way to handle asynchronous operations in JavaScript.
// It’s like saying: “Main tujhe baad mein result dunga — success ya fail dono options ke saath.”

// Syntax:
let promise = new Promise((resolve, reject) => {
  // async kaam yahan hoga
});

//  States of a Promise:
// Pending	Initial state, kaam chal raha hai
// Fulfilled	Kaam ho gaya (resolve called)
// Rejected	Kaam fail ho gaya (reject called)

// Promise.all([p1, p2, p3]); // Sab complete hone par result
// Promise.race([p1, p2, p3]); // Jo pehla complete hua, uska result

// Promise ek JS object hai jo future mein kisi async operation ke result ko represent karta hai.
// Tu then() use karta hai success ke liye, aur catch() failure ke liye.

// ------------------------------------------------------------------

// ES8 Async Await
// Async/Await = Cleaner way to use Promises
// It makes asynchronous code look like synchronous code

// async/await is a modern, cleaner, and readable way to write asynchronous JavaScript code using Promises.

async function processOrder() {
  try {
    const pizza = await orderPizza();
    console.log(pizza);
  } catch (error) {
    console.error("Error aaya:", error);
  }
}

// ------------------------------------------------------------------

// ES9 (ES2018) Key Features:

// Rest/Spread Properties for Objects ((Pehle sirf arrays ke liye hota tha))

const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40,
};

const { tiger, ...rest } = animals;
console.log(rest);

// Asynchronous Iteration (for await...of)
// => Multiple async tasks ko sequentially handle karna
const data = [
  Promise.resolve("First"),
  Promise.resolve("Second"),
  Promise.resolve("Third"),
];

async function printData() {
  for await (let item of data) {
    console.log(item);
  }
}

printData();

//  Yahan await har item ke Promise ko resolve hone tak wait karta hai.

// Promise.prototype.finally();
// Success ho ya error, last mai ek hi kaam karna ho.
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Error:", err))
  .finally(() => console.log("Request done "));
