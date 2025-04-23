// Composition vs Inheritance

// Inheritance —
// Inheritance mein ek class dusri class se extend karti hai, uske properties & methods inherit karti hai.

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

var dog = new Dog();
dog.speak(); // From Animal
dog.bark(); // From Dog

// Composition —
// Composition mein alag alag functionalities ko chhote pieces mein todte hain, aur use combine karte hain. Koi class kisi se inherit nahi karti.
const canRun = (state) => ({
  run: () => console.log(`${state.name} runs fast!`),
});

const canBark = (state) => ({
  bark: () => console.log(`${state.name} barks!`),
});

var dog = (name) => {
  const state = { name };
  return Object.assign({}, canRun(state), canBark(state));
};

const myDog = dog("Tommy");
myDog.run(); // Tommy runs fast!
myDog.bark(); // Tommy barks!

// OOP vs FP

Object-Oriented Programming (OOP)
// “Sab kuch object hai — data + behavior dono ek hi jagah!”

// Core Idea:
// Code real-world objects ki tarah design karo

// Object ke andar properties (data) aur methods (actions) dono hote hain

// Concepts:

// Class & Object

// Encapsulation

// Inheritance

// Polymorphism

// Abstraction

class Car {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log(`${this.brand} is driving`);
  }
}

const myCar = new Car("BMW");
myCar.drive();

// Functional Programming (FP)
// “Sab kuch function hai — no side effects, pure logic!”

// Core Idea:
// Code ko small, pure functions mein tod do

// Functions input lete hain, output dete hain, aur kuch mutate nahi karte

// Concepts:
// Pure functions

// Immutability

// Higher-order functions

// Function composition

// Recursion

const drive = (car) => `${car} is driving`;

console.log(drive("BMW"));


// Final Verdict:
// OOP = Better when things are stateful, interactive, object-like (e.g., UI components, games)
// FP = Better when things are data-driven, logic-based, and functional (e.g., APIs, calculations, React, Redux)

// Modern JavaScript lets you mix both, but FP is rising fast in frontend world.

