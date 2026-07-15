/*
Simple Defination :

undefined -> A variable exists but has not been assigned a value yet. 
javascript itself sets this automatically

null -> A variable exists, but it has been explicitly set to have no value or empty value.
It is intenional absence of any value.


*/

var a; // variable declared but not assigned
console.log(a); // Output: undefined

let audi = null; // variable explicitly assigned to null
console.log(audi); // Output: null

//
//Key Differences between null and undefined:   
//
/*
Feature    undefined                        Null
Meaning    Not assigned yet           Intentionally empty
Who sets?  JavaScript automatically      Programmer explicitly sets it
Type        undefined                     object(Historiacal bug in JavaScript)
==         null == undefined is true          null == undefined is true
===        null === undefined is false         null === undefined is false  

*/