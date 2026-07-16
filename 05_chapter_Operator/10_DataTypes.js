// JavaScript Data Types — Full Reference
// String, Number, Boolean, BigInt, Null, Undefined, Symbol, Object, Array, NaN

// typeof operator — tells you the type of a value

console.log(typeof "hello");     // string
console.log(typeof 10);          // number
console.log(typeof true);        // boolean
console.log(typeof 123n);        // bigint
console.log(typeof null);        // object (known JS quirk)
console.log(typeof undefined);   // undefined
console.log(typeof Symbol("id"));// symbol
console.log(typeof {});          // object
console.log(typeof []);          // object (array is a subtype of object)
console.log(typeof NaN);         // number (NaN is a special number value)

// NaN check — typeof won't help, use Number.isNaN()
console.log(Number.isNaN(NaN));  // true
