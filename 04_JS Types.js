// Type in JS
// Number => 5
// Boolean => true / false
// String => 'Hello'
// undefined => undefined // not declared or define yet. Yeh cheez bani toh hai... lekin abhi tak isme koi value di hi nahi gayi.
// null => null // Khaali box
// Symbol => Symbol('justt me') // Unique hoti hai
// Object => {}

// ------------------------------------------------------------------

typeof 5; // number
typeof true; // boolean
typeof "Hello"; // string
typeof undefined; // undefined
typeof null; // object
typeof Symbol(); // symbol
typeof {}; // object
typeof []; // object
typeof function () {}; // function

// Primitive vs Non-Primitive
// Primitive = Fixed, simple value jiska copy banta hai.
// Non-Primitive = Complex value jiska reference banta hai.

// Primitive - Value by copy(number, string, boolean, null, undefined, symbol, bigint)

// Non-Primitive - Value by reference (object, array, function, etc.)

// Array

var array = [1, 2, 3];

Array.isArray([]); // true

// Pass by value VS Pass by reference

// Pass by Value - Copy milti hai
// Jab tum kisi primitive value ko kisi function ya variable me pass karte ho, to uski ek nayi copy jaati hai. Original value safe rehti hai.

let a = 5;
let b = a;

b = 10;

// console.log(a); // 👉 5 (original safe)
// console.log(b); // 👉 10

// ------------------------------------------------------------------

// Pass by Reference — Asli cheez jaati hai

// Jab tum non-primitive (objects, arrays, functions) ko pass karte ho, to unka reference (pata/address) pass hota hai. Dono variable same memory location point karte hain.

let obj1 = { name: "Tony" };
let obj2 = obj1;

obj2.name = "Stark";

// console.log(obj1.name); // 👉 Stark (original bhi badal gaya)

// ------------------------------------------------------------------

// Pass by value mein tum ek photo bhejte ho,
// Pass by reference mein tum pura banda bhej dete ho! ab tumhe jaisa photo khichna hai khich sakte ho aur edit bhi kr sakte ho

// ------------------------------------------------------------------

// Type  Coercion

// JavaScript automatically jab ek type ko dusre type me convert kar deta hai, usse Type Coercion kehte hain.

// 1 = true
// 0 = false

// ------------------------------------------------------------------

// Common Conversions

// "5" + 1 => "51" => 1 ko string bana diya ("1")
// "5" - 1 => 4 => "5" ko number banaya (5)
// true + 1 => 2 => true = 1
// false + 1 => 1 => false = 0
// null + 1 => 1 => null = 0
// undefined + 1 => NaN => undefined = NaN (not a number)

// ------------------------------------------------------------------

// Shortcuts:

// "5" * 2 → Number

// "5" + 2 → String

// == → Coercion hoti hai

// === → Coercion nahi hoti

// ------------------------------------------------------------------

"5" == 5; // true (type coercion)
"5" === 5; // false (no coercion)

// ------------------------------------------------------------------
