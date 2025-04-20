// Function are objects

// JavaScript mein Functions bhi Objects hote hain
// Function sirf code chalanewali cheez nahi hoti, wo Object ki tarah behave kar sakti hai. Yani usme properties hoti hain, aur usse treat kiya ja sakta hai jaise ek normal object.

function greet(name) {
  return "Hello, " + name;
}

greet.language = "English";

console.log(greet("Tejas")); // Hello, Tejas
console.log(greet.language); // English

// Yahaan pe greet ek function bhi hai (jise hum call kar rahe hain), aur object bhi hai (jisme language naam ki property set kar di)

// ------------------------------------------------------------------

// Function are First Class Citizens

// 1
var stuff = function () {};
// asign function as variable

// 2
function a(fn) {
  fn();
}
// pass the function as an argument

// 3
function b() {
  return function c() {
    console.log("Hey");
  };
}

var d = b();
d();

// return function value from another function

// ------------------------------------------------------------------

// Higher Order Function

// Wo function jo ya to kisi function ko argument ke roop mein leta hai, ya function ko return karta hai, usse Higher Order Function kehte hain.

function greet(name) {
  return "Hello " + name;
}

function processUser(name, callback) {
  return callback(name);
}

// console.log(processUser("Tejas", greet));

const nums = [1, 2, 3, 4];

const doubled = nums.map(function (num) {
  return num * 2;
});

// console.log(doubled);

// ------------------------------------------------------------------

//  Closures

// Jab ek inner function, apne outer function ke variables ko yaad rakhta hai, even after the outer function has finished executing — usse closure kehte hain.

function outer() {
  let name = "Tejas";

  function inner() {
    console.log("Hello " + name);
  }

  return inner;
}

// const greet = outer(); // outer() run ho gaya, but inner abhi bhi "name" yaad rakhega
// greet(); // Output: Hello Tejas

// ------------------------------------------------------------------

// Closure in Memory

// Jab ek closure banta hai, to JavaScript us outer function ke variables ko memory me store rakhta hai — taaki inner function jab bhi chale, usse wo values mil sakein.

//  ------------------------------------------------------------------

// Encapsulation

// Encapsulation is all about hiding internal details and exposing only what’s necessary — jaise phone ka "call" button

function createUser(name, age) {
  let _age = age; // private variable

  return {
    getName: () => name,
    getAge: () => _age,
    setAge: (newAge) => {
      if (newAge > 0) {
        _age = newAge;
      } else {
        console.log("Invalid age!");
      }
    },
  };
}

const user = createUser("Stark", 30);
console.log(user.getAge()); // 30

user.setAge(-5);
console.log(user.getAge());

// ------------------------------------------------------------------
