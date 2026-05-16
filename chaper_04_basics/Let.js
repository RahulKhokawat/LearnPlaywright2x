let a = 10;
//let a = 15; //redeclaration is not allowed with let
console.log(a);
//let a = 20; //redeclaration is not allowed with let
//console.log(a);
a = 20;  // reassignment is allowed with let
console.log(a);

//Reassigned is you did not declare a variable with let or var,
// but you are assigning a value to it, then it is reassignment.
// It will create a global variable.