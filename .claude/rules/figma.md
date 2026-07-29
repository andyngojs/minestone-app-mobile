# Figma Rules — postman-app

These rules apply any time a Figma design is used as reference for implementing or modifying React Native Expo UI.

---

## Rule F1 — Always Use CoreUI Components

When a Figma component maps to a CoreUI widget, use the CoreUI widget — never hand-roll an equivalent.

| Figma component type | CoreUI widget |
|----------------------|---------------|
| App bar / navigation header | `Header` (`src/components/header`) |
| Primary / secondary button | `Button` (`src/components/button`) |
| Icon-only button | `IconButton` (`src/components/button`) |
| Body / heading text | `Typography` with the matching `TypographyType` (`src/components/typography`) |
| Icon | `Icon` (`src/components/icon`) |
| Card / info box | `Card` — compound: `Card.Kicker` / `Card.Title` / `Card.Body` / `Card.Meta` (`src/components/card`) |
| Input field / textarea | `Input` (`src/components/input`) |
| Pill / tag / chip | `Tag` (`src/components/tag`) — display-only, wrap in `Pressable` for selectable state |
| Bottom tab bar | `TabBar` (`src/components/tab-bar`) |

If a Figma component has no direct base-component equivalent (e.g. avatar image, modal sheet, selectable checkbox), compose it from React Native primitives (`View`/`Pressable`/etc.) and note the gap — do **not** create a one-off component that duplicates an existing base component's internals.

---

## Rule F2 — Always Use `AdaptorStyleSheet` for style

Use the `AdaptorStyleSheet` (import AdaptorStyleSheet from "Utils/adaptor-style-sheet") and use outside style in styles.ts (same level with component.tsx)
**Never use `StyleSheet`**

```ts
// ✅ correct
components.tsx
import styles from "./styles"
export function Component() {
  return <></>
}
styles.ts
import AdaptorStyleSheet from "Utils/adaptor-style-sheet"
const styles = AdaptorStyleSheet.create({})

// ❌ wrong
components.tsx
import AdaptorStyleSheet from "Utils/adaptor-style-sheet"
export function Component() {
  return <></>
}
const styles = AdaptorStyleSheet.create({})

```

---

## Rule F3 — Always Generate i18n for All User-Facing Strings

Every user-facing string taken from a design must be added to the i18n — never hardcoded inline.

**Workflow:**

1. Add the key to the resource file `src/i18n/resources/en/common.json` (currently the only language/namespace configured — see `src/i18n/i18n.constant.ts` and `src/i18n/i18n.ts`):
   ```json
   "createMoment": {
     "title": "What happened?"
   }
   ```
2. Reference via `useI18n` in the component:
   ```ts
   import { useI18n } from "@/i18n"
   const { t } = useI18n()
   t("createMoment.title")
   ```

**Naming convention:** `camelCase`, prefixed with the feature/screen name (e.g. `createMoment`, `home`, `tabBar`).

Do **not** hardcode user-facing strings directly in `.tsx` files.

---

## Rule F4 — Always Apply `px2dp()` to Spacing and Dimensions for StyleSheet or outside AdaptorStyleSheet

All width, height, spacing values, font sizes, padding, and margins taken from Figma must be scaled for device pixel density using `px2dp()`.

---

## Rule F5 — Figma → Base Component Implementation Checklist

Before submitting any Figma-driven screen:

- [ ] Every Figma component mapped to base components (Rule F1)
- [ ] All spacing uses `AdaptorStyleSheet` or `px2dp()` — no `StyleSheet` (Rule F2, Rule F4)
- [ ] All user-facing strings extracted to `i18n` and referenced via `app/i18n/*.ts` (Rule F3)
- [ ] Visual spot-check: layout matches the Figma screenshot at the correct breakpoint
