import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  isDark: boolean;
  setIsDark: (newFont: boolean) => void;
  getIsDark: () => boolean;
}

export type Theme = "default" | "dark" | "light";

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      isDark: false,

      setIsDark: (newTheme: boolean) => {
        set({ isDark: newTheme });
      },
      getIsDark: () => {
        return get().isDark;
      },
    }),
    { name: "themeStore" }
  )
);
