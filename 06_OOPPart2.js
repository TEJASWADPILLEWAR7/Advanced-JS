// Inheritance
//  Inheritance wo shortcut hai jisme beta baap ka saara code bina mehnat ke use karta hai.

class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Car is driving");
  }
}

//  Ab Car class ke object se start() bhi call kar sakta hai, jo parent class me tha.

// ------------------------------------------------------------------

// Mixins

// Problem Kya Thi?
// JS me ek class sirf ek hi parent class se extends kar sakti hai.

// class A {}
// class B extends A {} ✅
// class C extends A, B {} ❌ // not allowed in JS
// Toh ab agar mujhe multiple classes ka behaviour chahiye ek class ke andar — toh kya kare?

// ➡️ Mixins ka use karo! 🔧

let canFly = {
  fly() {
    console.log("Flying...");
  },
};

let canSwim = {
  swim() {
    console.log("Swimming...");
  },
};

class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Duck extends Animal {}

Object.assign(Duck.prototype, canFly, canSwim); // Yeh hai magic 💥

let donald = new Duck();
donald.fly(); // Flying...
donald.swim(); // Swimming...
donald.eat(); // Eating...

// ------------------------------------------------------------------

// Polymorphism

// Polymorphism ka matlab hai — same method name, lekin different behavior depending on context.

// Real Life Example:

// Soch le ek Mobile class hai.

// Ab sabhi phones me use() method ho sakta hai:

// iPhone ka use() bole: "Using iOS features"

// Samsung ka use() bole: "Using Android features"

// Nokia ka use() bole: "Using keypad features"

// Same method name → use(), lekin behavior alag-alag.

// Yehi hota hai Polymorphism.

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks 🐶");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows 🐱");
  }
}

function makeAnimalSpeak(animal) {
  animal.speak(); // Alag-alag behavior depending on object
}

let a = new Animal();
let d = new Dog();
let c = new Cat();

makeAnimalSpeak(a); // Animal speaks
makeAnimalSpeak(d); // Dog barks
makeAnimalSpeak(c); // Cat meows

// Real World Use Case:
// Payment Gateways:

class Payment {
  pay() {}
}

class PayPal extends Payment {
  pay() {
    console.log("Paid via PayPal");
  }
}

class Stripe extends Payment {
  pay() {
    console.log("Paid via Stripe");
  }
}

// System bas pay() call karega — use nahi pata ki andar kaun se gateway use ho raha. Ye hota hai Polymorphism!

// Polymorphism allows different classes to be treated as one type — but behave differently.
