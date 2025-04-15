// Execution Context: Think of it as the environment where your code runs. It includes variables, functions, and scope that affect how your code behaves.

// Lexical Scope: This refers to how variables and functions are accessible in your code based on where they are defined. It's determined at compile time and influences how your code finds and uses variables within nested functions or blocks.

// Hoisting : JavaScript's default behavior of moving declarations (not initializations) to the top of their scope before code execution.

// function – fully hoisted

// var – hoisted as undefined

// let/const – hoisted but not accessible (temporal dead zone)

a();

function a() {
  console.log("hi");
}

function a() {
  console.log("by");
}

// FUNCTION INVOCATION

// Function Expression
var icecream = () => {
  console.log("Cold");
};

// Function Declaration
function tea() {
  console.log("Hot");
}
