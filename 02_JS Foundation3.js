// Exercise Block Scope

function loopWithVar() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("final", i);
}

// we have the access of i becouse of var. var have the global scope access

// loopWithVar();

function loopWithLet() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("final", i);
}

// becouse of the let have block scope. We can't use any variable which is declared using let or const outside of the scope.

// loopWithLet();

// -------------------------------------------------------------

// IIFE

(function () {
  var name = "Tony";
  //   console.log(name);
})();
// console.log(name); // Error, kyunki "name" IIFE ke andar hi tha

// IIFE ek aisa function hota hai jo define hote hi turant execute hota hai, aur variables ko local scope mein rakhta hai, taaki wo global scope ko pollute na ka

// -------------------------------------------------------------

// this keyword

// this ka matlab hota hai — main kiski baat kar raha hoon?

// normal funtion

const obj = {
  name: "Tejas",
  greeting: function () {
    return `Hello ${this.name}`; // this matalab vo object jisme this ko use kiya gya hai, yha this.name === user.namne
  },
  welcome: function () {
    return `${this.greeting()} welcome to our company !`;
  },
};

// console.log(obj.welcome());

// ------------------------------

// Arrow function

const user = {
  name: "Bruce",
  greet: () => {
    // console.log("Hello, " + this.name);
  },
};

user.greet(); // Output: Hello, undefined
// this actually global object se aa raha hai (browser mein window, Node.js mein global)
// Aur this.name undefined ho jata hai kyuki window.name ya global.name undefined hai.

// ------------------------------

// this inside event listeners

// document.getElementById("btn").addEventListener("click", function () {
//   console.log(this); // 👉 button element ko refer karega
// });

// Yahan this us HTML element ko point karta hai jispe event laga hai.

// ------------------------------

// Browser mein agar function object ke bahar call hota hai, to this by default window object ko refer karta hai.

// ------------------------------

// Soch this ek banda hai, wo hamesha puchta hai:

// “Main kis object ke andar hoon? Main kiske through bulaaya gaya hoon?”

// Agar object ke andar hai — to "main us object ka hoon".

// Agar function ke bahar hai — to "main window ka hoon".

// Arrow function mein — "main toh sirf apne parent ki baat maanunga".

// -----------------------------------------------------------

// call() apply() bind()

// Syntax
// functionName.call(object, arg1, arg2, ...);
// functionName.apply(object, [arg1, arg2, ...]);
// const newFn = functionName.bind(object);

const person1 = {
  name: "Tony",
};

const person2 = {
  name: "Tejas",
};

function sayHello(greeting, emoji) {
  console.log(`${greeting}, I am ${this.name} ${emoji}`);
}

// call
sayHello.call(person1, "Hello", "❤️");
sayHello.call(person2, "Ram Ram", "🙏");

// call() me arguments comma se dete hain

// Function turant chal jaata hai

// ------------------------------

// apply()

//  Same as call() but arguments array mein

sayHello.apply(person1, ["Hello", "👋"]);
sayHello.apply(person2, ["Hey", "😎"]);

// Bas call() ka array version samajh lo

// ------------------------------

// bind()

// bind Function ko future ke liye baandh do

const greetSteve = sayHello.bind(person2, "Yo", "🔥");

greetSteve();

// bind() ka matlab hai Function ko tie (baandh) do kisi object ke saath — abhi mat chalao, jab chaaho tab chala lena.

// ------------------------------------------------------------------

// Currying

// Ek function jo multiple arguments accept karta tha, usko chhote-chhote functions mein tod dena, jahan har function ek hi argument leta hai.

// ------------------------------------------------------------------

// 🎯 Real-world analogy:
// Tu ek pizza shop hai 🍕

// Pehla function poochhta hai: "Kaunsi base chahiye?"

// Dusra poochhta hai: "Kaunsa topping chahiye?"

// Teesra: "Kaunsa size?"

// Tu bolta hai:

// makePizza("thin")("cheese")("large");

// ------------------------------------------------------------------

// Normal Function:

function add(a, b) {
  return a + b;
}

add(2, 3);

// -------------------------------

// Curried Function:

function add(a) {
  return function (b) {
    return a + b;
  };
}

add(2)(3);

// ------------------------------------------------------------------

// nice example of currying using bind and this

function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

// ------------------------------------------------------------------

// Context vs Scope

// Scope = Variables kaha available hain?
// Context = Function kis environment mein chal raha hai (i.e., this kispe point kar raha hai)?

// ------------------------------------------------------------------
