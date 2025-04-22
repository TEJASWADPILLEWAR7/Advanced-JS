// Constructor function =>  ek normal function hota hai jiska kaam hota hai naye objects banana.
// Aur ye function new keyword ke sath use hota hai.

// type of Constructor function => Object

function Student(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;
}

Student.prototype.intro = function () {
  return `Hi, I'm ${this.name}, ${this.age} years old and I study ${this.course}.`;
};

const student1 = new Student("Tejas", 20, "JavaScript");
const student2 = new Student("Amruta", 20, "Python");

console.log(student1.intro());
console.log(student2.intro());

// Breakdown :
// Jab new Student() likha:

// Ek naya empty object {} bana

// this us naye object ko point karta hai

// Properties set ho gayi → name, age, course

// Return ho gaya new object with all data

// Important Points:

// Constructor function ka naam capital letter se shuru hota hai (by convention)

// this keyword us newly created object ko refer karta hai

// Return automatically hota hai (no need to write return)

// ------------------------------------------------------------------

// Constructor Function aur Class kaam dono ka same hai — bas syntax ka difference hai. Class modern hai aur readable bhi, par andar se constructor function hi kaam karta hai.

// ------------------------------------------------------------------

// this and new keyword

// this => ek object ko refer karta hai — jo object function/method ko call kar raha hota hai.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const p1 = new Person("Tejas", 20);
p1.greet(); // Hi, I'm Tejas and I'm 20 years old.

// Explanation:

// this.name matlab → us object ka name

// p1.greet() → yahan this refers to p1

// Rule: this hamesha us object ko refer karta hai jo function ko call kar raha hai.

// ------------------------------------------------------------------

// new Keyword

// new ka use hota hai object banane ke liye kisi class ya constructor function se.

class Car {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log(`${this.brand} is driving`);
  }
}

const car1 = new Car("mercedes"); // 👈 new keyword
car1.drive(); // mercedes is driving

// What new does:

// Ek empty object banata hai → { }

// Constructor function call karta hai aur this us object ko point karta hai

// Jo bhi this me set hota hai, wo us object me store hota hai

// Final object return hota hai

// ------------------------------------------------------------------

// Prototype

// Agar kisi object ke paas koi cheez nahi hai, to wo apne prototype (parent) se le leta hai.

function Student(name) {
  this.name = name;
}

// Prototype pe ek common method diya
Student.prototype.sayHi = function () {
  console.log("Hi, I’m " + this.name);
};

const s1 = new Student("Tejas");

s1.sayHi(); // Output: Hi, I’m Tejas

// Breakdown:
// sayHi() function s1 ke andar nahi hai directly.

// JS pehle s1 ke andar dhundta hai — nahi milta.

// Fir wo s1.__proto__ (matlab Student.prototype) pe jaata hai — waha mil jaata hai.

// Aur call kar deta hai

// ------------------------------------------------------------------

// ES6 Class

// ES6 Class is just a cleaner, modern way to write constructor functions and prototypes. Under the hood, it's still using prototype-based inheritance.

class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  describe() {
    console.log(`${this.name} is ${this.color}`);
  }
}

const mango = new Fruit("Mango", "Yellow");
mango.describe(); // Mango is Yellow

// Key Points:
// constructor() — automatic call hota hai jab new se object banta hai.

// this — usi object ko refer karta hai jo new se bana.

// Methods ko class ke andar directly likh sakte ho.

// Class ke andar jo method likhte ho, wo prototype pe chala jata hai internally.

// ------------------------------------------------------------------
