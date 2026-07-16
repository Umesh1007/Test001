# 📘 Playwrite — JavaScript Learning Project

> A hands-on JavaScript practice repo covering fundamentals, browser APIs, and engine internals.

---

## 📁 Project Map

```
Playwrite/
├── 01_chapter_Javascript/     # Core JS practice
├── 03_chapter_Identifier/     # Identifiers & naming rules
├── 04_chapter_Literals/       # Literals & special values
├── 05_chapter_Operator/       # Operators & type coercion
├── IQ_Notes/                  # Deep-dive notes & reference
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
| `05_Comments.js` | Comments | `//` single-line, `/* */` multi-block |
| `06_identifer_InterviewQuestion.js` | Interview Q&A | Common identifier gotchas asked in JS interviews |

### 🔹 `04_chapter_Literals/`

| File | Concept | Key Takeaway |
|------|---------|-------------|
| `07_Literals.js` | Literal values | String, number, boolean, BigInt — fixed values in source code |
| `08_null_undefined.js` | Null vs undefined | `null` = intentional absence, `undefined` = uninitialized |
| `09_Null_InterviewQuestion.js` | Interview Q&A | Tricky null comparison questions |

### 🔹 `05_chapter_Operator/`

| File | Concept | Key Takeaway |
|------|---------|-------------|
| `10_DataTypes.js` | Type system | `typeof` for all JS types — String, Number, BigInt, Symbol, etc. |
| `11_ArithmeticOperator.js` | Math operators | `+ - * / % **` — including modulus for odd/even check |
| `12_Assignment_Operator.js` | Shorthand assignments | `=`, `+=`, `-=`, `*=` |
| `13_Comparision_Operator.js` | Comparison operators | `==` loose vs `===` strict — golden rule: prefer `===` |
| `14_Logical_Operator.js` | Boolean logic | `&&` (AND), `\|\|` (OR), `!` (NOT) |
| `15_Confusing_Comparision.js` | Coercion traps | `"" == 0`, `null >= 0` — null vs undefined mental model |
| `16_ternary_operator.js` | Ternary conditional | `condition ? valIfTrue : valIfFalse` |
| `17_String_Operator.js` | String concatenation | `+` joins strings, `+=` appends in place |
| `18_Nested_Ternanry.js` | Chained ternary | `cond1 ? a : cond2 ? b : c` — HTTP status code classification |
| `19_typeof_operator.js` | Type checking | `typeof` for all types + `Array.isArray()` / `Number.isNaN()` |

### 🔹 `IQ_Notes/`

| File | Topic |
|------|-------|
| `01_JS_Engine_vs_V8_Engine_IQ.md` | JS Engine pipeline & V8 internals deep-dive |
| `02_JS_Keywords_Identifiers_Literals_Operators_IQ.md` | Keywords, identifiers, literals, operators IQ |
| `03_commands.md` | VS Code shortcuts & workflow |
| `04_Operator.md` | Full operator reference — breakdown table, coercion walkthrough, diagram |

### 🔹 `Session_JS_Basics/`

Empty — ready for future JavaScript fundamentals sessions.

---

## 🧠 Concepts Covered

| # | Concept | Where |
|---|---------|-------|
| 1 | `console.log()` output | `01_HelloWorld.js` |
| 2 | `let` keyword & variable assignment | `02_let_Concept.js` |
| 3 | HTML/CSS grid layout | `calculator.html` |
| 4 | DOM event handling (click + keyboard) | `calculator.html` |
| 5 | State management with IIFE closures | `calculator.html` |
| 6 | Chained arithmetic & edge cases | `calculator.html` |
| 7 | Identifier rules & naming conventions | `03_Identifier_Rules.js` |
| 8 | Comments — single & multi-line | `05_Comments.js` |
| 9 | Literal types (string, number, boolean) | `07_Literals.js` |
| 10 | `null` vs `undefined` semantics | `08_null_undefined.js` |
| 11 | Arithmetic operators — `+ - * / % **` | `11_ArithmeticOperator.js` |
| 12 | Assignment shorthand — `+= -= *=` | `12_Assignment_Operator.js` |
| 13 | `==` loose vs `===` strict comparison | `13_Comparision_Operator.js` |
| 14 | Logical operators — `&&`, `\|\|`, `!` | `14_Logical_Operator.js` |
| 15 | Type coercion traps | `15_Confusing_Comparision.js` |
| 16 | Ternary conditional — `? :` | `16_ternary_operator.js` |
| 17 | String concatenation — `+`, `+=` | `17_String_Operator.js` |
| 18 | Chained / nested ternary | `18_Nested_Ternanry.js` |
| 19 | `typeof` operator & type checking | `19_typeof_operator.js` |

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

---

> 📖 **IQ Notes** contain detailed deep-dives and references — see [`IQ_Notes/README.md`](IQ_Notes/README.md) for the full index.
