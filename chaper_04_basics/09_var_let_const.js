var v = 10; //global variable or global scope
var browser = "chrome";
var browser = "firefox";  //redeclaration

browser = "edge"; //reassignment

console.log(v);
console.log(browser);

function hello() {
    console.log("Playwright is awesome");
    var v = 20; //local variable
    console.log(v);
}
hello();  // this is hosting, we can call the function before its declaration
var v = 30;
console.log(v);