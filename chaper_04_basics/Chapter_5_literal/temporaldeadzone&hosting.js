//Hoisting and TDZ (Temporal Dead Zone) are core JavaScript concepts related to 
// how variables and functions behave during the memory creation phase before
// code execution starts.But the behavior differs for var, let, const and functions.

//JavaScript Execution Phases:
//When JS runs code, it does 2 phases:
//Phase 1 — Memory Creation Phase
//Memory is allocated for:
//variables
//functions
//Phase 2 — Execution Phase
//Code executes line by line.

//var hoisting
console.log(a);
var a = 10; // Output: undefined
// Explanation: During the memory creation phase, 'a' is hoisted and initialized 
// with 'undefined'. When the code executes, it logs 'undefined' before 'a' 
// is assigned the value 10. 

//Let hoisting and TDZ
//console.log(b);
//let b = 10; // Output: ReferenceError: Cannot access 'b' before initialization
// Explanation: 'let' variables are hoisted as well but not initialized. They are in a
// temporal dead zone (TDZ) from the start of the block until the declaration is
// processed. Accessing 'b' before its declaration results in a ReferenceError. 

//function hoisting   
sayHello();

function sayHello() {
    console.log("Hello");
}
// Explanation: Function declarations are hoisted with their entire body. This means
// that you can call 'sayHello' before its declaration, and it will work as expected, 
// logging "Hello" to the console.  
//inshort entire function is stored in memory during creation phase.

sayHey();

var sayHey = function () {
    console.log("Hey"); // Output: TypeError: sayHey is not a function
};
// Explanation: In this case, 'sayHey' is a variable declared with 'var', and the
//  function expression is assigned to it. During the memory creation phase, 
// 'sayHey' is hoisted and initialized with 'undefined'. When you try to call 
// 'sayHey' before its assignment, it results in a TypeError because you are 
// trying to call 'undefined' as a function.      

sayHello();

let sayHello = function () {
   console.log("Hello"); // Output: ReferenceError: Cannot access 'sayHello' before initialization
};
// Explanation: Here, 'sayHello' is declared with 'let', which means it is hoisted 
// but not initialized. It is in the temporal dead zone (TDZ) until the declaration 
// is processed. When you try to call 'sayHello' before its declaration, 
// it results in a ReferenceError.  