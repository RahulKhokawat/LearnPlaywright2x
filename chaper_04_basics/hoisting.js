hello();  // this is hosting, we can call the function before its declarationvar v = 10;
console.log(v); //this is actual hoisting since we are using the variable before its declaration
var v = 15;
var browser = "chrome";
var browser = "firefox";  //redeclaration

browser = "edge"; //reassignment

console.log(v);
console.log(browser);

function hello() {
    var v = 20; //local variable
    console.log(v);
}

var v = 30;
console.log(v);

