// Prototypal Inheritance

// Tere paas ek object hai: father

// Uska beta hai: son

// Agar son ke paas koi cheez nahi hai, toh wo father se le lega.
// Just like beta apne papa ki skills ya knowledge inherit karta hai.

// JavaScript mein objects dusre objects se properties aur methods inherit kar sakte hain, jise Prototypal Inheritance kehte hain.

// ------------------------------------------------------------------

const father = {
  canDrive: true,
  canCook: true,
};

const son = Object.create(father);

son.canCook = false;

console.log(son.canDrive); // true → inherit kiya father se
console.log(son.canCook); // false → apna override kar diya

// ------------------------------------------------------------------

// Only function have prototye properties

// Prototypal Inheritance => Ek object dusre object se cheeze inherit kare
// Object.create() => Inheritance banane ka tareeka
// Prototype Chain => JavaScript ka search path for properties

// ------------------------------------------------------------------
