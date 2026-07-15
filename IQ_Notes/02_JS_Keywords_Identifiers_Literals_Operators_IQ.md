# 🔤 JavaScript Basis — Keywords, Identifiers, Literals, Operators

## Breakdown Table

| # | Concept | What It Is | JavaScript Rules | Walkthrough (`let total = 10 + 20; console.log(total);`) | Other Examples |
|---|---------|-----------|-----------------|----------------------------------------------------------|----------------|
| 1 | **Keyword** | Reserved word with a special meaning to the JS engine. You **cannot** use it as a variable/function name. | Case-sensitive, reserved by the language spec (ECMAScript). | `let` — tells the engine to declare a block-scoped variable. <br> `console` — not a keyword (it's a global object identifier). | `var`, `const`, `if`, `else`, `for`, `while`, `function`, `return`, `class`, `import`, `export`, `typeof` |
| 2 | **Identifier** | Name given to a variable, function, class, or property. Points to a value in memory. | Must start with `a–z`, `A–Z`, `_`, or `$`. <br> Followed by letters, digits, `_`, or `$`. <br> Cannot be a reserved keyword. | `total` — identifier for a variable holding the sum. <br> `console` — identifier for the global console object. <br> `log` — property identifier on `console`. | `userName`, `$count`, `_private`, `calculateTotal`, `fetchData`, `MyClass` |
| 3 | **Literal** | A fixed value written directly into the source code. Not a variable — it *is* the value. | **Number**: digits, optional decimal. <br> **String**: wrapped in `"` or `'` or `` ` ``. <br> **Boolean**: `true` / `false`. <br> **Null/Undefined**: `null`, `undefined`. <br> **BigInt**: digits + `n`. | `10` — numeric literal (integer). <br> `20` — numeric literal (integer). | `"hello"` (string), `42` (number), `true` (boolean), `null`, `100n` (BigInt), `[1, 2]` (array literal), `{a: 1}` (object literal) |
| 4 | **Operator** | Symbol or keyword that performs an operation on one or more values (operands). | **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `**` <br> **Assignment**: `=`, `+=`, `-=` <br> **Comparison**: `==`, `===`, `!=`, `>`, `<` <br> **Logical**: `&&`, `||`, `!` <br> **Unary**: `++`, `--`, `typeof` | `=` — **assignment operator** — stores `10 + 20` into `total`. <br> `+` — **arithmetic operator** — adds `10` and `20`. | `a === b` (strict equality), `x > 5` (comparison), `!done` (logical NOT), `count++` (increment) |

---

## 🔍 Annotated Code Walkthrough

```js
let  total  =   10   +   20   ;
│      │     │    │    │    │   │
│      │     │    │    │    │   └─ Punctuator (semicolon — statement end)
│      │     │    │    │    └──── Literal (number 20)
│      │     │    │    └───────── Operator (arithmetic +)
│      │     │    └────────────── Literal (number 10)
│      │     └─────────────────── Operator (assignment =)
│      └───────────────────────── Identifier (variable name)
└──────────────────────────────── Keyword (let — declaration)
```

### Step-by-step execution:

| Step | Code Remainder | Engine Sees | Action |
|------|---------------|-------------|--------|
| 1 | `let total = 10 + 20;` | Keyword `let` | Enter variable declaration mode |
| 2 | `total = 10 + 20;` | Identifier `total` | Register name `total` in current scope |
| 3 | `= 10 + 20;` | Operator `=` | Expect an expression on the right |
| 4 | `10 + 20;` | Literal `10` | Load value `10` into temporary register |
| 5 | `+ 20;` | Operator `+` | Expect another operand for addition |
| 6 | `20;` | Literal `20` | Load value `20`, perform `10 + 20` → `30` |
| 7 | `;` | Punctuator `;` | Assign result `30` to `total`, end statement |
| 8 | `console.log(total)` | — | Resolve `console` → access `.log` → pass `total` (30) → print |

---

## 🧠 Token Classification Diagram

How the JS engine's **Scanner** classifies every piece of `let total = 10 + 20;`:

```
SOURCE:      let    total    =    10    +    20    ;
                ↓       ↓     ↓     ↓     ↓     ↓    ↓
TOKENS:    KEYWORD  IDENT   OP    LIT    OP    LIT  PUNC
             (let)  (total)  (=)   (10)   (+)   (20)  (;)
                ↓       ↓     ↓     ↓     ↓     ↓    ↓
CATEGORY:   Keyword  Ident.  Op.  Literal  Op.  Lit.  Punc.
```

The scanner doesn't care *what* the code means yet — it only classifies each chunk into one of these token types. The **Parser** (next stage) takes these tokens and builds the AST.

---

## 📊 Quick Reference Table

| Concept | Analogy | Memory? | Can I change it? |
|---------|---------|---------|-----------------|
| **Keyword** | Grammar rule in English (`is`, `the`, `and`) | No — built into the language | No — reserved by JS |
| **Identifier** | A label / name tag | Points to a box in memory | The binding can change (for `let`/`var`) |
| **Literal** | The actual value written down | The value itself sits in the bytecode stream | No — it's a fixed constant in source |
| **Operator** | A verb / action (`add`, `assign`, `compare`) | No — it's an instruction | No — symbol is fixed, but operands change |

---

## 📝 TL;DR

| # | Concept | One-Liner | Our Code |
|---|---------|-----------|----------|
| 1 | **Keywords** | Reserved words that tell the engine what to do | `let` — "declare a variable" |
| 2 | **Identifiers** | Names you give to variables/functions so you can refer to them later | `total` — "the box holding the sum" |
| 3 | **Literals** | Raw values written directly in code — the data itself | `10`, `20` — the numbers being added |
| 4 | **Operators** | Symbols that perform actions on values | `=` (assign), `+` (add) — the verbs of JS |

> `let total = 10 + 20;` — 4 token categories in one line: a **keyword** (`let`) declares an **identifier** (`total`), an **operator** (`=`) assigns the result of another **operator** (`+`) combining two **literals** (`10` and `20`). Every JS program is just combinations of these four building blocks.
