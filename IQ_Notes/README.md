# 📘 Playwrite — JavaScript Learning Project

> A hands-on JavaScript practice repo covering fundamentals, browser APIs, and engine internals.

---

## 📁 Project Map

```
Playwrite/
├── 01_chapter_Javascript/     # Core JS practice
│   ├── 01_HelloWorld.js       # console.log basics
│   ├── 02_let_Concept.js      # let keyword, variables, literals
│   └── calculator.html        # Full production-level calculator app
│
├── 03_chapter_Identifier/     # Identifiers & naming rules
│   ├── 03_Identifier_Rules.js        # Identifier naming conventions
│   ├── 04_Identifier_Rule_Part2.js   # More identifier rules
│   ├── 05_Comments.js                # Single & multi-line comments
│   └── 06_identifer_InterviewQuestion.js  # Interview Q&A on identifiers
│
├── 04_chapter_Literals/       # Literals & special values
│   ├── 07_Literals.js                # String, number, boolean literals
│   ├── 08_null_undefined.js          # null vs undefined
│   └── 09_Null_InterviewQuestion.js  # Interview Q&A on null
│
├── 05_chapter_Operator/       # Operators & type coercion
│   ├── 10_DataTypes.js               # JS type system overview
│   ├── 11_ArithmeticOperator.js      # +, -, *, /, %, **
│   ├── 12_Assignment_Operator.js     # =, +=, -=, *=
│   ├── 13_Comparision_Operator.js    # ==, ===, !=, !==, >, <, >=, <=
│   ├── 14_Logical_Operator.js        # &&, ||, !
│   └── 15_Confusing_Comparision.js   # == vs ===, null coercion traps
│
├── IQ_Notes/                  # Deep-dive notes & reference
│   ├── README.md              # ← you are here
│   ├── JS_Engine_vs_V8_Engine_IQ.md  # V8 internals deep-dive
│   ├── 03_commands.md                # VS Code shortcuts & workflow
│   └── 04_Operator.md                # Full operator reference
│
└── Session_JS_Basics/         # Placeholder — upcoming sessions
```

---

## 📂 Chapter Breakdown

### 🔹 `01_chapter_Javascript/`

| File | Concept | Key Takeaway |
|------|---------|-------------|
| `01_HelloWorld.js` | Console output | `console.log()` — the simplest JS program |
| `02_let_Concept.js` | Variable declaration | `let` keyword, `=` operator, literal `10`, identifier `x` |
| `calculator.html` | Full DOM app (379 lines) | Dark-theme calculator with **grid layout**, **keyboard support**, **chained operations**, **error handling**, **ARIA accessibility** |

### 🔹 `03_chapter_Identifier/`

| File | Concept | Key Takeaway |
|------|---------|-------------|
| `03_Identifier_Rules.js` | Identifier rules | Must start with letter, `_`, or `$` — no reserved words |
| `04_Identifier_Rule_Part2.js` | More rules | Case-sensitive, Unicode support, naming conventions |
| `05_Comments.js` | Comments | `//` single-line, `/* */` multi-block — ignored by engine |
| `06_identifer_InterviewQuestion.js` | Interview Q&A | Common identifier gotchas asked in JS interviews |

### 🔹 `04_chapter_Literals/`

| File | Concept | Key Takeaway |
|------|---------|-------------|
| `07_Literals.js` | Literal values | String, number, boolean, BigInt — fixed values in source code |
| `08_null_undefined.js` | Null vs undefined | `null` = intentional absence, `undefined` = uninitialized |
| `09_Null_InterviewQuestion.js` | Interview Q&A | Tricky null comparison questions (e.g., `null == 0` vs `null >= 0`) |

### 🔹 `05_chapter_Operator/`

| File | Concept | Key Takeaway |
|------|---------|-------------|
| `10_DataTypes.js` | Type system | String, Number, Boolean, BigInt, Null, Undefined, Symbol, NaN |
| `11_ArithmeticOperator.js` | Math operators | `+ - * / % **` — including modulus for odd/even check |
| `12_Assignment_Operator.js` | Shorthand assignments | `=`, `+=`, `-=`, `*=` — update variables without repetition |
| `13_Comparision_Operator.js` | Comparison operators | `==` loose vs `===` strict — always prefer `===` |
| `14_Logical_Operator.js` | Boolean logic | `&&` (AND), `||` (OR), `!` (NOT) — truth table basics |
| `15_Confusing_Comparision.js` | Coercion traps | `"" == 0` is `true`, `null >= 0` is `true` — always use `===` |

### 🔹 `IQ_Notes/`

| File | Topic |
|------|-------|
| `JS_Engine_vs_V8_Engine_IQ.md` | JS Engine pipeline vs V8's Scanner → Parser → Ignition → TurboFan → Orinoco, with `let x = 10` walkthrough |
| `03_commands.md` | VS Code shortcuts & workflow — run, edit, navigate, debug |
| `04_Operator.md` | Full operator reference — breakdown table, coercion walkthrough, category diagram |

### 🔹 `Session_JS_Basics/`

Empty — ready for future JavaScript fundamentals sessions.

---

## 🧠 Concepts Covered

| # | Concept | Where |
|---|---------|-------|
| 1 | `console.log()` output | `01_HelloWorld.js` |
| 2 | `let` keyword & variable assignment | `02_let_Concept.js` |
| 3 | Operators, literals, identifiers | `02_let_Concept.js` |
| 4 | HTML/CSS grid layout | `calculator.html` |
| 5 | DOM event handling (click + keyboard) | `calculator.html` |
| 6 | State management with IIFE closures | `calculator.html` |
| 7 | Chained arithmetic & edge cases (div by 0) | `calculator.html` |
| 8 | ARIA accessibility roles & labels | `calculator.html` |
| 9 | Identifier rules & naming conventions | `03_Identifier_Rules.js` |
| 10 | Single & multi-line comments | `05_Comments.js` |
| 11 | Literal types (string, number, boolean) | `07_Literals.js` |
| 12 | `null` vs `undefined` semantics | `08_null_undefined.js` |
| 13 | Arithmetic operators — `+ - * / % **` | `11_ArithmeticOperator.js` |
| 14 | Assignment shorthand — `+= -= *=` | `12_Assignment_Operator.js` |
| 15 | `==` loose vs `===` strict comparison | `13_Comparision_Operator.js` |
| 16 | Logical operators — `&&`, `\|\|`, `!` | `14_Logical_Operator.js` |
| 17 | Type coercion traps — `"" == 0`, `null >= 0` | `15_Confusing_Comparision.js` |
| 18 | JS Engine pipeline (all engines) | `IQ_Notes/JS_Engine_vs_V8_Engine_IQ.md` |
| 19 | V8 internals — Ignition, TurboFan, Orinoco | `IQ_Notes/JS_Engine_vs_V8_Engine_IQ.md` |
| 20 | JIT compilation & deoptimization cycle | `IQ_Notes/JS_Engine_vs_V8_Engine_IQ.md` |
| 21 | VS Code shortcuts & workflow patterns | `IQ_Notes/03_commands.md` |
| 22 | Full operator reference & coercion walkthrough | `IQ_Notes/04_Operator.md` |

---

## 🧪 Quick Start

```bash
# Run JS files
node "01_chapter_Javascript/01_HelloWorld.js"
node "01_chapter_Javascript/02_let_Concept.js"

# Open calculator in browser
start 01_chapter_Javascript/calculator.html
```

---

## 📜 Git History

| Commit | Message |
|--------|---------|
| `a06c69f` | Add production-level calculator app |
| `6168c9b` | Add more Hello World statements |
| `99917b2` | Initial commit |

**Remote:** `github.com/Umesh1007/Test001.git`

---

## 🗺️ Roadmap (WIP)

- [x] Hello World — `console.log()`
- [x] Variables — `let` keyword
- [x] Calculator — DOM, events, keyboard, a11y
- [x] Engine deep-dive — V8 internals IQ note
- [ ] `Session_JS_Basics/` content
- [ ] More IQ notes (closures, hoisting, event loop, this, promises)
