import { create } from "zustand";

interface FontStore {
  font: Font;
  setFont: (newFont: Font) => void;
  getFont: () => string;
}

export type Font = "default" | "mono" | "serif" | "sans";

export const useFontStore = create<FontStore>((set, get) => ({
  font: "sans",

  setFont: (newFont: Font) => {
    set({ font: newFont });
  },
  getFont: () => {
    return get().font;
  },
}));
