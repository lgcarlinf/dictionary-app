import { create } from "zustand";
import { useHistoryStore } from "./historyStore";

interface WordStore {
  word: string;
  setWord: (newWord: string) => void;
  getWord: () => string;
}

export const useInputStore = create<WordStore>((set, get) => ({
  word: "",
  setWord: (newWord: string) => {
    set({ word: newWord });
    useHistoryStore.getState().addToHistory(newWord);
  },
  getWord: () => {
    return get().word;
  },
}));
