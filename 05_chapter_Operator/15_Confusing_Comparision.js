// 🧠 Confusing Comparisons — The Tricky Parts

// ==  -> Loose equality (does type coercion — surprising results)
// === -> Strict equality (no coercion — what you usually want)

console.log("" == 0);     // true  (empty string coerced to 0)
console.log("" === 0);    // false (string !== number)

console.log("0" == 0);    // true  ("0" coerced to 0)
console.log("0" === 0);   // false (string !== number)

// --- null vs undefined Comparison ---
// null     -> Intentionally empty (you set it)
// undefined -> Unintentionally empty (JS default)

console.log(null == undefined);   // true  (loose says "both are empty")
console.log(null === undefined);  // false (strict says "different types")

console.log(null == 0);           // false (null is NOT coerced to 0 with ==)
console.log(undefined == 0);      // false

console.log(null >= 0);           // true  (null IS coerced to 0 with >=)
console.log(undefined >= 0);      // false

console.log(null > 0);            // false
console.log(null == 0 || null > 0); // false

// 🥇 Rule of thumb: Always use === and !== — never trust == with edge cases
