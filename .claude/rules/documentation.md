# Documentation Rules

These rules govern how `README.md`, `docs/react-native.md` are kept current.
They apply to any work that changes toolchain versions, native config, dependencies, or architecture.

---

## Rule 11 — Keep Documentation Current After Significant Changes

After completing any task that affects the following, propose updates to the relevant doc files:

| Change type | Update required |
|-------------|----------------|
| React Native version bump | `README.md` (version in header + library table), `docs/react-native.md` (prerequisites, commands) |
| Flutter / Melos / FVM version bump | `README.md` (version in header), `docs/flutter.md` (prerequisites, commands) |
| New npm/pub dependency introduced (key libraries) | `README.md` (Key Libraries table) |
| New Melos script added | `docs/flutter.md` (Melos Commands section) |
| New yarn script added | `docs/react-native.md` (Running / Maintenance sections) |
| iOS min version or Xcode requirement change | `docs/react-native.md` (Prerequisites, Troubleshooting) |
| Android compileSdk / AGP change | `docs/react-native.md` (Troubleshooting or Android section) |
| New environment variable added | Both `docs/react-native.md` and `docs/flutter.md` (Environment files section) |
| Native bridge channel name change | `README.md` (RN ↔ Flutter Bridge section) |
| New feature package added to Flutter monorepo | `README.md` (Flutter Package Overview), `docs/flutter.md` (Project Structure) |
| Bootstrap order change | `README.md` (Bootstrap Order), both setup guides |
| New troubleshooting solution discovered | Add row to the Troubleshooting table in the relevant guide |

---

## Rule 12 — Documentation Update Workflow

1. After implementing the change, identify which docs are affected using the table in Rule 11.
2. Propose the documentation update to the user:
   - Show exactly which section changes and what the new content should be.
3. Wait for explicit user confirmation before writing.
4. Apply the update in-place — do not append stale content.

> Documentation updates follow Rule 5 (Ask Before Updating Skills or Memory): always show the proposed diff and confirm before writing.

---

## What These Files Cover

| File | Purpose |
|------|---------|
| `README.md` | Project architecture overview — shown on GitHub home page. Covers project structure and links to setup guides. |
| `docs/react-native.md` | Step-by-step new-dev setup guide for React Native: prerequisites, install steps, env files, run commands, troubleshooting. |

---

## What NOT to Document Here

- Debugging recipes or one-off fixes — those belong in skill files (`.claude/skills/`)
- Git history or who changed what
- Ephemeral CI state
- Content already in CLAUDE.md files