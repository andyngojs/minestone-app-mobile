# Coding Convention Rules

These rules govern how code is written in this repository, on top of the general
process rules in `workflow.md`. They apply to all TypeScript/TSX code (screens,
components, routes, store, utils) written or modified in this project.

---

## Rule 13 — Code Must Be Readable and Maintainable

Write code for the next engineer who reads it, not just for the compiler. Prefer
clear naming, small focused functions, and explicit control flow over clever
one-liners.

Before choosing between a terse expression and a more explicit one, pick the one
a teammate unfamiliar with this specific piece of code could follow without extra
explanation.

---

## Rule 14 — No Hardcoded Values

Do not hardcode values that are likely to change or that already have a canonical
source (theme tokens, spacing scale, API URLs, feature flags, copy strings). If a
value must be defined for a specific case, keep it dynamic/configurable (a
constant, a theme token, a config file, an i18n key) so that a future fix only
requires a change in one place, not across many files.

Colors/spacing → `theme.*` tokens. User-facing strings → i18n keys
(`src/i18n/resources/en/common.json`). Repeated literals (route names, category
lists, etc.) → a single exported constant/type, not copy-pasted across files.

---

## Rule 15 — Follow React and Expo Conventions

All code must follow standard React and Expo conventions — Rules of Hooks (no
conditional hooks, correct dependency arrays), component composition over
inheritance, Expo-recommended APIs over ad hoc native workarounds, and the
existing patterns already established in this codebase (see the react-native
skill's `Project Structure`, `Screen Structure`, and `Navigation` sections).

---

## Rule 16 — No Single-Line/Shorthand Control Flow

Every `if`, `else`, `for`, and `while` block must use braces and be written as
its own block — never a single-line shorthand.

```ts
// correct
if (a > b) {
  return a
}

// wrong
if (a > b) return a
```

---

## Rule 17 — Minimize Optional Chaining (`?.`)

Avoid `?.` where the nullability can be handled explicitly (an early return, a
default value, or a guard clause). Reach for `?.` only when there is no
reasonable explicit alternative (e.g. a deeply optional third-party response
shape).

---

## Rule 18 — Explicit if/else Blocks, No Nested Conditionals

Write `if`/`else` as clearly separated blocks. Do not nest conditionals inside
other conditionals — extract the inner condition into a guard clause, an early
return, or a separate function instead.

```ts
// correct
if (!user) {
  return null
}

if (!user.isActive) {
  return null
}

return renderUser(user)

// wrong
if (user) {
  if (user.isActive) {
    return renderUser(user)
  }
}
```

---

## Rule 19 — Minimize Ternary Operators

Only use `condition ? a : b` when it is short and simple — a single-line
expression with no side effects. If a ternary would span multiple lines, nest
another ternary, or contain non-trivial logic, rewrite it as an explicit
`if`/`else` block instead.

---

## Rule 20 — Audit Impact Before Changing Code

Before modifying a file, check which other files depend on it (imports, shared
types, navigation params, theme tokens) and how the change affects their logic.
Do not change a shared file (component, type, util) without first confirming
every caller still behaves correctly.

---

## Rule 21 — Use Async/Await Over Raw Promises

Prefer `async`/`await` for asynchronous code. Only fall back to raw
`.then()`/`.catch()` Promise chaining in the rare case where `async`/`await`
cannot express the needed control flow (e.g. `Promise.all` composition, or
concurrent fire-and-forget calls).

---

## What This File Does Not Cover

- Process rules (planning, confirmation, sub-agents, memory) — see `workflow.md`.
- Documentation update rules — see `documentation.md`.
- Figma-to-component mapping rules — see `figma.md`.
