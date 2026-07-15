// Rule of thumb
// == -> loose equality (does type coercion, surprising)
// === -> strict equality (no type coercion, what you usally want)

console.log("" == 0); // Output: true (loose comparison, empty string is coerced to 0)
console.log("" === 0); // Output: false (strict comparison, different types)

console.log("0" == 0); // Output: true (loose comparison, string "0" is coerced to number 0)
console.log("0" === 0); // Output: false (strict comparison, different types)



// null vs undefined
// null -> explicitly set to no value
// undefined -> variable declared but not assigned a value

console.log(null == undefined); // Output: true (loose comparison, both are considered equal)
console.log(null === undefined); // Output: false (strict comparison, different types)

console.log(null == 0); // Output: false (loose comparison, null is not equal to 0)
console.log(undefined == 0); // Output: false (loose comparison, undefined is not equal to 0)

console.log(null>=0); // Output: true (loose comparison, null is  to 0) (null means somthing greater than 0)
console.log(undefined>=0); // Output: false (loose comparison, undefined is not coerced to a number)

console.log(null ==0 || null > 0); // Output: false (loose comparison, null is not equal to 0 and not greater than 0)