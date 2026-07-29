# Skill: React Native Version Upgrade

## Pre-conditions (Rule 2)

1. **Pre-upgrade audit** — record current versions before touching anything:
   ```bash
   node --version
   yarn --version
   npx react-native --version
   cat package.json | grep '"react-native"'
   cat ios/Podfile | grep "platform :ios"
   ```
2. **Check upgrade helper**: https://react-native-community.github.io/upgrade-helper/
3. **Plan per toolchain matrix** — list every file that changes (package.json, Podfile, build.gradle, app.config.ts, eas.json, metro.config.js, babel.config.js).
4. **Checklist** — confirm with user before any change.

## This Project's Toolchain

| Tool | Current Version |
|------|----------------|
| React Native | 0.79.6 |
| React | 19.0.0 |
| Expo | ~53.0.20 |
| New Architecture | ON (`newArchEnabled: true`) |
| Min iOS | 16.6 |
| Node | >= 20 |
| JDK | >= 17 |

## Upgrade Order

1. Update `package.json` versions (RN, React, Expo, related libs)
2. Run `yarn install`
3. Update `ios/Podfile` platform version if needed
4. Run `cd ios && pod install && cd ..`
5. Update `app.config.ts` / `eas.json` if SDK version changes
6. Update `metro.config.js` / `babel.config.js` if required by new RN version
7. Apply any patch-package patches (`yarn postinstall`)
8. Run `yarn android` — fix all errors
9. Run `yarn ios` — fix all errors
10. Run `yarn lint` — fix all warnings

## Expo SDK Upgrades

- Follow https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/
- `expo-build-properties` controls native flags (min iOS, newArch, etc.)
- Check `eas.json` build profiles after SDK bump
- `expo install` to auto-resolve correct peer dep versions

## New Architecture Considerations

- New Arch is already ON — do not disable it during upgrade
- Check for any third-party libs that don't support New Arch
- Patch-package patches in `patches/` may need updating

## Rollback Plan

- Keep a git branch `before-upgrade` before starting
- Document every manual native file change in the PR description

## Checklist

- [ ] `yarn android` — build succeeds, app launches
- [ ] `yarn ios` — build succeeds, app launches
- [ ] `yarn lint` — clean
- [ ] Key flows tested: login, order creation, task detail, payment
- [ ] Update README.md + README.en.md versions (Rule 11)
- [ ] Update `.claude/skills/react-native/SKILL.md` versions
