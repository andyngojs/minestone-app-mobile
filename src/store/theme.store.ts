import {create} from 'zustand';
import {Theme} from '../theme/data/model';
import {BASE_DARK_THEME} from '../theme/theme.dark';
import {BASE_LIGHT_THEME} from '../theme/theme.light';
import {BASE_DARK_THEME_ID, BASE_LIGHT_THEME_ID} from '../theme/theme.constant';

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

export const useThemeStore = create<ThemeState>((set, get) => ({
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
}));

export const useTheme = () => useThemeStore((state) => state.theme);
