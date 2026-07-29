import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {Theme} from '../theme/data/model';
import {BASE_DARK_THEME} from '../theme/theme.dark';
import {BASE_LIGHT_THEME} from '../theme/theme.light';
import {
  BASE_DARK_THEME_ID,
  BASE_LIGHT_THEME_ID,
  CUSTOM_THEME_STORAGE_KEY,
} from '../theme/theme.constant';

const THEMES_BY_ID: Record<string, Theme> = {
  [BASE_LIGHT_THEME_ID]: BASE_LIGHT_THEME,
  [BASE_DARK_THEME_ID]: BASE_DARK_THEME,
};

type ThemeState = {
  themeId: string;
  theme: Theme;
  setThemeId: (themeId: string) => void;
  toggleTheme: () => void;
};

type PersistedThemeState = {
  themeId: string;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      themeId: BASE_LIGHT_THEME_ID,
      theme: BASE_LIGHT_THEME,
      setThemeId: (themeId) => {
        const theme = THEMES_BY_ID[themeId];
        if (!theme) {
          return;
        }
        set({themeId, theme});
      },
      toggleTheme: () => {
        const nextId =
          get().themeId === BASE_LIGHT_THEME_ID ? BASE_DARK_THEME_ID : BASE_LIGHT_THEME_ID;
        get().setThemeId(nextId);
      },
    }),
    {
      name: CUSTOM_THEME_STORAGE_KEY,
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => {
        const persistedState: PersistedThemeState = {themeId: state.themeId};
        return persistedState;
      },
      onRehydrateStorage: () => {
        return (state) => {
          if (!state) {
            return;
          }
          state.setThemeId(state.themeId);
        };
      },
    },
  ),
);

export const useTheme = () => useThemeStore((state) => state.theme);
