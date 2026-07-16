// typeof operator — tells you the data type of a value

console.log(typeof 10);              // number
console.log(typeof "Hello");         // string
console.log(typeof true);            // boolean
console.log(typeof 123n);            // bigint
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object (known JS quirk — null is not an object)
console.log(typeof Symbol("id"));    // symbol
console.log(typeof {});              // object
console.log(typeof []);              // object (array is a subtype of object)
console.log(typeof NaN);             // number (NaN is a special number value)

// To properly check if something is an array:
console.log(Array.isArray([]));      // true

// To properly check if something is NaN:
console.log(Number.isNaN(NaN));      // true
