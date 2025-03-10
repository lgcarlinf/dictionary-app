import { create } from "zustand";

interface WordStore {
  word: string;
  setWord: (newWord: string) => void;
  getWord: () => string;
}

export const useInputStore = create<WordStore>((set, get) => ({
  word: "",
  setWord: (newWord: string) => {
    set({ word: newWord });
  },
  getWord: () => {
    return get().word;
  },
}));
