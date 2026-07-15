# ➗ JavaScript Operators — Full Reference

## Operator Breakdown Table

| # | Category | Operator | What It Does | Example |
|---|----------|----------|-------------|---------|
| 1 | **Data Types** | — | JS types: String, Number, Boolean, BigInt, Null, Undefined, Symbol, Array, NaN | `typeof "hello"` → `"string"` |
| 2 | **Arithmetic** | `+` | Addition — adds two numbers / concatenates strings | `10 + 5` → `15` |
| 3 | **Arithmetic** | `-` | Subtraction — subtracts right from left | `10 - 5` → `5` |
| 4 | **Arithmetic** | `*` | Multiplication — multiplies two numbers | `10 * 5` → `50` |
| 5 | **Arithmetic** | `/` | Division — divides left by right | `10 / 5` → `2` |
| 6 | **Arithmetic** | `%` | Modulus — returns remainder of division | `10 % 3` → `1` |
| 7 | **Arithmetic** | `**` | Exponentiation — raises left to power of right | `2 ** 3` → `8` |
| 8 | **Assignment** | `=` | Assigns a value to a variable | `let x = 10` |
| 9 | **Assignment** | `+=` | Add & assign — `x = x + n` shorthand | `x += 5` → adds 5 to x |
| 10 | **Assignment** | `-=` | Subtract & assign — `x = x - n` shorthand | `x -= 3` → subtracts 3 from x |
| 11 | **Assignment** | `*=` | Multiply & assign — `x = x * n` shorthand | `x *= 2` → doubles x |
| 12 | **Comparison** | `==` | **Loose** equality — coerces types before comparing | `10 == "10"` → `true` |
| 13 | **Comparison** | `===` | **Strict** equality — no coercion, compares type + value | `10 === "10"` → `false` |
| 14 | **Comparison** | `!=` | Loose inequality — coerces types | `10 != "5"` → `true` |
| 15 | **Comparison** | `!==` | Strict inequality — type + value check | `10 !== "10"` → `true` |
| 16 | **Comparison** | `>` | Greater than | `10 > 5` → `true` |
| 17 | **Comparison** | `<` | Less than | `10 < 5` → `false` |
| 18 | **Comparison** | `>=` | Greater than or equal to | `10 >= 10` → `true` |
| 19 | **Comparison** | `<=` | Less than or equal to | `10 <= 5` → `false` |
| 20 | **Logical** | `&&` | AND — `true` only if **both** operands are `true` | `true && false` → `false` |
| 21 | **Logical** | `\|\|` | OR — `true` if **at least one** operand is `true` | `true \|\| false` → `true` |
| 22 | **Logical** | `!` | NOT — negates (flips) the boolean value | `!true` → `false` |

---

## 🔍 Walkthrough: Confusing Comparisons (The Tricky Parts)

### Loose vs Strict Equality

```
         == (loose)                      === (strict)
   ┌──────────────┐                 ┌──────────────┐
   │  10 == "10"  │                 │ 10 === "10"  │
   │  "10" → 10   │                 │ number≠string│
   │  10 == 10 ✅ │                 │ → false ❌   │
   │  → true      │                 │              │
   └──────────────┘                 └──────────────┘
   (coerces type)                   (rejects mismatch)
```

### The `null` vs `undefined` Trap

```js
null == undefined   // true  ← loose says "both are empty"
null === undefined  // false ← strict says "different types"

null == 0           // false ← weird: null is NOT coerced to 0 with ==
null >= 0           // true  ← but null IS coerced to 0 with >=
```

**Rule of thumb:** Always use `===` and `!==` unless you specifically need type coercion. Never trust `==` with edge cases.

### Null vs Undefined — Quick Mental Model

| Value | Meaning | When It Happens |
|-------|---------|----------------|
| `null` | **Intentionally** empty | You set it: `let x = null` |
| `undefined` | **Unintentionally** empty | JS default: `let x;` → `x` is `undefined` |

---

## 🧠 Operator Categories Diagram

```
                  ┌──────────────────────────────────┐
                  │        JS OPERATORS              │
                  └────────────┬─────────────────────┘
                               │
        ┌──────────────────────┼──────────────────────────┐
        │                      │                          │
        ▼                      ▼                          ▼
┌──────────────┐     ┌──────────────────┐      ┌──────────────┐
│  ARITHMETIC   │     │    COMPARISON     │      │   LOGICAL    │
│──────────────│     │──────────────────│      │──────────────│
│ +  addition   │     │ ==  loose eq      │      │ &&  AND      │
│ -  subtract   │     │ === strict eq     │      │ ||  OR       │
│ *  multiply   │     │ !=  loose neq     │      │ !   NOT      │
│ /  divide     │     │ !== strict neq    │      │              │
│ %  modulus    │     │ >  <  >=  <=      │      │              │
│ ** exponent   │     │                  │      │              │
│               │     │ ALWAYS PREFER    │      │              │
│               │     │ === and !==      │      │              │
└──────────────┘     └──────────────────┘      └──────────────┘

          ┌──────────────────────────────┐
          │        ASSIGNMENT            │
          │──────────────────────────────│
          │  =    x = 10                 │
          │  +=   x = x + 5             │
          │  -=   x = x - 3             │
          │  *=   x = x * 2             │
          └──────────────────────────────┘
```

---

## 📊 Quick Reference — Most-Used Operators in Practice

| Priority | Operator | Why It Matters |
|----------|----------|----------------|
| ⭐⭐⭐ | `===` / `!==` | Always use strict equality — avoid coercion bugs |
| ⭐⭐⭐ | `=` | Assignment — you'll write this in every single line |
| ⭐⭐⭐ | `+` / `-` / `*` / `/` | Basic math — every program needs these |
| ⭐⭐ | `+=` / `-=` | Shorthand for updating counters, totals, accumulators |
| ⭐⭐ | `%` | Check even/odd (`n % 2`), wrap-around logic |
| ⭐⭐ | `&&` / `\|\|` | Control flow — conditions, guards, default values |
| ⭐ | `**` | Exponents — cleaner than `Math.pow()` |
| ⭐ | `!` | Flip booleans — toggle flags, check falsy values |

---

## 📝 TL;DR

| # | Operator | Symbol | What to Remember |
|---|----------|--------|-----------------|
| 1 | **Strict equality** | `===` | **Always use this.** Compares type + value, no surprises. |
| 2 | **Loose equality** | `==` | **Avoid.** Does type coercion — `"" == 0` is `true`, `null >= 0` is `true`. |
| 3 | **Assignment** | `=` | One `=` assigns. Two `==` compares loosely. Three `===` compares strictly. |
| 4 | **Modulus** | `%` | Remainder after division — `n % 2 === 0` means even number. |
| 5 | **AND / OR** | `&&` / `\|\|` | `&&` needs both true. `\|\|` needs at least one true. |
| 6 | **NOT** | `!` | Flips `true` ↔ `false`. Double `!!` coerces any value to boolean. |
| 7 | **Exponentiation** | `**` | `2 ** 3` = 8. Modern alternative to `Math.pow(2, 3)`. |

> **Golden rule:** When in doubt, use `===`. It saves you from JavaScript's weird coercion like `null >= 0` being `true`. Every `==` bug is a lesson learned the hard way — skip the lesson and just use `===`.
