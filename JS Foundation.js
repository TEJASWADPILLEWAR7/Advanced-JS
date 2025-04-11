// call stack + memory heap

const number = 610; // allocate memory for number
const string = "hello"; // allocate memory for string
const human = {
  first: "Tejas",
  last: "Wadpillewar",
  age: 19,
}; // allocate memory for object and it's values

// call stack =>

function subcalc(num) {
  return num + 10;
}

function calc(a, b) {
  const ans = a + b;
  return subcalc(ans);
}

// console.log(calc(1, 1));

// garbage collection
var garbage = {
  firstName: "abc",
  lastName: "xyz",
};

var garbage = 5;

// So the object is garbage now.

// garbage collection (GC) is an automatic memory management system. It frees up memory by deleting variables and objects that are no longer needed (i.e., not reachable).

// JS is single-threaded language.
// That means JS only excute one task at time.
