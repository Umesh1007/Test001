# ⌨️ VS Code Commands & Shortcuts — JavaScript Workflow

## Command Breakdown Table

| # | Category | Command / Shortcut | What It Does | When to Use (Our JS Files) |
|---|----------|-------------------|-------------|----------------------------|
| 1 | **Run Code** | `Ctrl + Alt + N` | Run active JS file via Code Runner extension | After writing `console.log("Hello")` in `01_HelloWorld.js` — instantly see output |
| 2 | **Run Node** | `node <file>` (Terminal) | Execute JS file with Node.js runtime | `node "01_chapter_Javascript/02_let_Concept.js"` — run `let x = 10` |
| 3 | **Open Terminal** | `` Ctrl + ` `` | Toggle integrated terminal panel | Run commands without leaving the editor |
| 4 | **New Terminal** | `Ctrl + Shift + `` ` | Create a new terminal instance | Keep one terminal for running, another for git |
| 5 | **Save File** | `Ctrl + S` | Save the current file | Always save before running — otherwise stale code executes |
| 6 | **Format Code** | `Shift + Alt + F` | Auto-format JS/HTML/CSS with Prettier | Clean up indentation in `calculator.html` after pasting |
| 7 | **Comment Line** | `Ctrl + /` | Toggle line comment (`//`) | Quickly comment out a `console.log` while debugging |
| 8 | **Block Comment** | `Shift + Alt + A` | Toggle block comment (`/* */`) | Comment multi-line explanations in `03_Identifier_Rules.js` |
| 9 | **IntelliSense** | `Ctrl + Space` | Trigger autocomplete suggestions | Type `con` + `Ctrl + Space` → suggests `console` |
| 10 | **Quick Open** | `Ctrl + P` | Fuzzy-find and open any file | Type `05_Comments` to jump straight to that file |
| 11 | **Command Palette** | `Ctrl + Shift + P` | Access all VS Code commands | `>Format Document`, `>Toggle Sidebar`, `>Git: Commit` |
| 12 | **Go to Line** | `Ctrl + G` | Jump to a specific line number | `:15` jumps to line 15 in `05_Comments.js` |
| 13 | **Find** | `Ctrl + F` | Search within the current file | Find all `console.log` usages |
| 14 | **Find & Replace** | `Ctrl + H` | Search and replace in current file | Rename `total` → `sum` across a file |
| 15 | **Sidebar Toggle** | `Ctrl + B` | Show/hide the explorer sidebar | More screen space for reading code |
| 16 | **Split Editor** | `Ctrl + \` | Open a side-by-side editor | Compare `03_Identifier_Rules.js` and `04_Identifier_Rule_Part2.js` |
| 17 | **Close Tab** | `Ctrl + W` | Close current editor tab | Clean up after reviewing a file |
| 18 | **Undo** | `Ctrl + Z` | Undo last edit | Revert accidental deletion |
| 19 | **Redo** | `Ctrl + Y` | Redo previously undone edit | Restore something you undid by mistake |
| 20 | **Copy Line** | `Ctrl + C` (no selection) | Copy the entire current line | Duplicate a `console.log` line |
| 21 | **Move Line** | `Alt + ↑ / ↓` | Move current line up or down | Reorder variable declarations |
| 22 | **Duplicate Line** | `Shift + Alt + ↑ / ↓` | Copy line above/below | Quickly add more test cases |
| 23 | **Multi-Cursor** | `Alt + Click` | Place cursors at multiple positions | Edit multiple `console.log` statements at once |
| 24 | **Select Word** | `Ctrl + D` | Select current word — press again to select next match | Select all `console` identifiers for bulk rename |
| 25 | **Zoom In/Out** | `Ctrl + + / -` | Increase/decrease editor font size | Make code readable during presentations |

---

## 🔍 Walkthrough: Common Workflow Patterns

### Pattern A — Run a JS File (Fast Loop)

```
1. Write code          →  2. Ctrl + S         →  3. Ctrl + `        →  4. node <file>
   (in editor)             (save)                 (open terminal)        (run & see output)
```

**Example with `02_let_Concept.js`:**
```
Ctrl + S          →  saves `let x = 10; console.log(x);`
Ctrl + `          →  opens terminal pane at bottom
node 02_let...js  →  prints "10"
```

### Pattern B — Quick File Navigation

```
Ctrl + P                  →  type "04_Iden"       →  Enter
(Quick Open)                 (fuzzy finds file)      (opens file)
```

### Pattern C — Debug with Comments

```js
// Before:
console.log("step 1");
console.log("step 2");   // Ctrl + / → toggle comment
console.log("step 3");

// After:
console.log("step 1");
// console.log("step 2"); // ← commented out — won't run
console.log("step 3");
```

---

## 🧠 Command Categories Diagram

```
                  ┌────────────────────────────┐
                  │     VS CODE COMMANDS       │
                  └────────────┬───────────────┘
                               │
            ┌──────────────────┼──────────────────┐
            │                  │                  │
            ▼                  ▼                  ▼
   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
   │  EDITING      │   │  NAVIGATION  │   │  EXECUTION   │
   │──────────────│   │──────────────│   │──────────────│
   │ Ctrl+S Save  │   │ Ctrl+P Open  │   │ Ctrl+` Term  │
   │ Ctrl+Z Undo  │   │ Ctrl+G Line  │   │ node run.js  │
   │ Ctrl+/ Cmnt  │   │ Ctrl+B Side  │   │ Ctrl+Alt+N   │
   │ Ctrl+D Mult  │   │ Ctrl+\ Split │   │ (CodeRunner) │
   │ Alt+↑ Move   │   │ Ctrl+W Close │   │              │
   │ Sht+Alt+F    │   │ Ctrl+F Find  │   │              │
   └──────────────┘   └──────────────┘   └──────────────┘
```

---

## 📊 Quick Reference — Most-Used in This Project

| Priority | Shortcut | Why It Matters for JS Learning |
|----------|----------|-------------------------------|
| ⭐⭐⭐ | `Ctrl + Alt + N` | Run the current file instantly — see your code come alive |
| ⭐⭐⭐ | `` Ctrl + ` `` | Open terminal to run `node <file>` or `git status` |
| ⭐⭐⭐ | `Ctrl + S` | Save before every run — no stale outputs |
| ⭐⭐ | `Ctrl + /` | Comment/uncomment lines while experimenting |
| ⭐⭐ | `Ctrl + P` | Jump between chapters (`01_chapter_` ↔ `03_chapter_`) |
| ⭐⭐ | `Shift + Alt + F` | Keep code readable — especially on paste |
| ⭐ | `Ctrl + D` | Select & edit multiple occurrences — rename variables fast |
| ⭐ | `Alt + ↑ / ↓` | Move lines to reorder declarations without cut/paste |

---

## 📝 TL;DR

| # | Command | Keystroke | Why You'll Use It Most |
|---|---------|-----------|----------------------|
| 1 | **Run file** | `Ctrl + Alt + N` | Execute `console.log` / any JS immediately |
| 2 | **Open terminal** | `` Ctrl + ` `` | Run `node`, `git`, `npm` commands |
| 3 | **Save** | `Ctrl + S` | Persist changes before execution |
| 4 | **Quick Open** | `Ctrl + P` | Navigate between 9+ project files in seconds |
| 5 | **Toggle comment** | `Ctrl + /` | Debug by silencing lines without deleting |
| 6 | **Multi-cursor** | `Alt + Click` | Edit multiple lines simultaneously |
| 7 | **Format** | `Shift + Alt + F` | Auto-prettify messy JS/HTML/CSS |
| 8 | **Command Palette** | `Ctrl + Shift + P` | Access *every* VS Code feature by name |

> VS Code is the IDE; Node.js is the runtime. **Ctrl + S → Ctrl + ` → node file.js** is the fastest feedback loop for learning JavaScript. Master these 3 keystrokes and everything else is a bonus.
