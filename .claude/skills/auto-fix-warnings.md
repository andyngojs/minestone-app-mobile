# Skill: Auto-Fix Warnings (Lint / TypeScript)

## Pre-conditions (Rule 2)

1. **Run lint/analyze first** — collect all warnings before making any changes:
   ```bash
   yarn lint
   npx tsc --noEmit 2>&1 | tee /tmp/ts-errors.txt
   ```
2. **Categorize** warnings:
   - TypeScript errors (code 6133 = unused var, 2339 = property missing, etc.)
   - ESLint warnings (unused imports, missing deps, etc.)
   - React Hooks exhaustive-deps
3. **Plan changes** grouped by file — list every file that will be touched.
4. **Confirm** with user.
5. **Fix** and re-run lint to confirm clean.

## Common Warning Types

| Code | Meaning | Fix |
|------|---------|-----|
| TS6133 | Declared but never read | Remove import/variable, or use it |
| TS2694 | Namespace has no exported member | Wrong type import (e.g. `NodeJS.Timeout` → use `ReturnType<typeof setTimeout>`) |
| TS2339 | Property does not exist on type | Add to interface, or use optional chaining |
| ESLint `react-hooks/exhaustive-deps` | Missing dependency in useCallback/useMemo | Add dep or suppress with comment if intentional |

## NodeJS.Timeout Pattern (This Project)

The project has a recurring issue with `NodeJS.Timeout` in React Native (New Architecture):
```ts
// ❌ Causes TS2694
scrollEndTimersRef = useRef<Array<NodeJS.Timeout | null>>([])

// ✅ Fix
scrollEndTimersRef = useRef<Array<ReturnType<typeof setTimeout> | null>>([])
```

## Do Not Suppress

- Never use `// @ts-ignore` or `// eslint-disable` unless the user explicitly approves.
- Fix the underlying cause.

## Checklist

- [ ] `yarn lint` exits with 0 errors/warnings
- [ ] `npx tsc --noEmit` exits clean
- [ ] Both `yarn ios` and `yarn android` still pass (Rule 10)
