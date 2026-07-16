// 🔍 Comparison Operators
// =, ==, ===, !=, !==, >, <, >=, <=

// =  -> Assignment operator — assigns a value to a variable (not comparison!)
// == -> Loose equality — coerces types before comparing (⚠️ avoid)
// === -> Strict equality — compares type + value (✅ always use this)

console.log(10 == 10);     // true  (same number)
console.log(10 == "10");   // true  (loose — coerces "10" to 10)
console.log(10 === "10");  // false (strict — number !== string)

// !=  -> Loose inequality — coerces types
// !== -> Strict inequality — type + value check

console.log(10 != 5);      // true
console.log(10 !== "10");  // true (strict — different types)

// Relational operators

console.log(10 > 5);       // true
console.log(10 < 5);       // false
console.log(10 >= 10);     // true  (10 > 10 OR 10 == 10)
console.log(10 <= 5);      // false

// 🥇 Golden rule: Always use === and !== unless you specifically need coercion
