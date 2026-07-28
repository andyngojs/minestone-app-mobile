# Workflow Rules

These rules govern every task Claude takes in this repository.
They apply to all work: bug fixes, feature additions, upgrades, refactors, test generation.

---

## Rule 1 — Plan and Checklist Before Acting

**Before starting ANY task, requirement, or user request — no exceptions:**

1. Present a written plan explaining the approach and why.
2. Include an explicit checklist of every file that will be changed.
3. Wait for explicit user confirmation ("yes", "do it", "approved", "ok", or equivalent).
4. Only begin work after the plan is accepted.

This rule applies to ALL work: feature additions, bug fixes, upgrades, refactors, native changes,
file deletions, config edits — anything that modifies the repository.

For ambiguous or multi-step tasks, ask clarifying questions **before** planning.
Never start implementation speculatively.
Never assume approval from context — wait for an explicit confirmation in the current message.

---

## Rule 2 — Pre-Conditions for Specific Task Types

Each of the following task types has a mandatory pre-condition sequence.
Read the corresponding skill file before starting:

| Task type                   | Skill file                               | Pre-conditions                                                              |
| --------------------------- | ---------------------------------------- | --------------------------------------------------------------------------- |
| Fix a bug / issue           | `.claude/skills/fix-issues.md`           | Read file → reproduce → identify root cause → plan → checklist → confirm    |
| Fix warnings (lint/analyze) | `.claude/skills/auto-fix-warnings.md`    | Run lint/analyze → categorize warnings → plan changes → checklist → confirm |
| Generate tests              | `.claude/skills/generate-tests.md`       | Read source → understand architecture → plan coverage → checklist → confirm |
| RN version upgrade          | `.claude/skills/react-native-upgrade.md` | Run pre-upgrade audit → plan per toolchain matrix → checklist → confirm     |

---

## Rule 3 — Done = Tested, No Errors

A task is **only complete** when:

- Implementation is finished.
- **Both** `yarn android` and `yarn ios` succeed locally and the app launches on each platform (Rule 10).
- Lint passes (`yarn lint` / `melos analyze`).
- All related tests pass.

Never mark a task done based on code written alone.

---

## Rule 4 — Fix All Errors Absolutely

- Every build, lint, or runtime error must be fully resolved before proceeding.
- Do not suppress, skip, or work around errors unless explicitly approved by the user.
- Investigate root causes; do not treat symptoms.
- If blocked, report the blocker clearly and propose alternatives — never silently move on.

---

## Rule 5 — Ask Before Updating Skills or Memory

Before modifying any file in `.claude/skills/` or any memory file:

1. Explain what is stale or missing.
2. Show the proposed new content (or diff).
3. Wait for user confirmation.

Memory updates must also be **compact** — no duplicate facts, no ephemeral state.
Each memory file covers one topic. When a fact changes, update in-place; do not append.

---

## Rule 6 — Memory Must Stay Compact

- One memory file per topic.
- Maximum one concise paragraph per fact.
- Remove or overwrite stale entries immediately when the fact changes.
- Never record: code patterns, file paths, git history, debugging recipes, or anything in CLAUDE.md.
- After any session that resolved a non-trivial issue, propose a memory or skill update.

---

## Rule 7 — Sub-Agents for Complex Tasks

If a task is complex or parallelizable, break it into sub-tasks and delegate to sub-agents.
Each sub-agent must have a clear, isolated scope and return a concrete result.
Do not duplicate work across agents.

---

## Rule 8 — Record Lessons Learned

After resolving a non-trivial issue:

1. Add a note to the relevant plan file (e.g., `PLAN_RN_UPGRADE.md`) with:
   - Root cause
   - Fix applied
   - Why it happened
2. Propose a memory or skill update if the lesson is reusable across sessions.
3. Always ask before writing the update (Rule 5).

---

## Rule 9 — iOS Bug Fix Must Use `yarn ios` to Reproduce and Verify

When asked to fix **any iOS bug or crash**:

1. **Reproduce first** — run `yarn ios` and capture the full build + runtime output.
2. **Read the log** — identify the exact error, crash address, exception type, and failing file/line from the output. Do not guess the root cause from code alone.
3. **Fix** — apply the targeted fix based on what the log shows.
4. **Verify** — re-run `yarn ios` and confirm:
   - Build succeeds with no errors or warnings that block launch.
   - App launches on the simulator without crashing.
   - The specific symptom (crash, black screen, etc.) is gone.
5. **Iterate** — if the fix does not resolve the issue, repeat from step 1 with the new log. Do not chain multiple speculative fixes without re-running.

**No iOS bug is considered fixed until `yarn ios` completes and the app runs.**

---

## Rule 10 — Both Platforms Must Pass Before Done

After **any** change (native code, Podfile, JS, dependencies, config — anything):

1. Run `yarn android` and wait for it to complete.
2. Run `yarn ios` and wait for it to complete.
3. If either fails — **do not stop**. Read the error, diagnose the root cause, apply a fix, and re-run the failing platform.
4. Repeat the fix → run cycle until both builds succeed and the app launches without crashing on each platform.
5. If stuck after two attempts, report the exact error and the approaches tried, then ask for guidance.

**This rule is non-negotiable.** A task is not done until BOTH `yarn android` and `yarn ios` succeed and the app launches. A build that compiles but crashes on launch is still a failure.

---
