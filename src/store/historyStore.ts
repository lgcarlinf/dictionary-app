import { create } from "zustand";
  
  interface HistoryItem {
    word: string;
    date: string;
    hour: string;
  }
  
  interface HistoryStore {
    history: HistoryItem[];
    addToHistory: (word: string) => void;
    getHistory: () => HistoryItem[];
    clearHistory: () => void;
  }

  export const useHistoryStore = create<HistoryStore>((set, get) => ({
    history: [],
    addToHistory: (word: string) => {
      const newItem: HistoryItem = {
        word,
        date: new Date().toISOString().split('T')[0],
        hour: new Date().toTimeString().split(' ')[0],
      };
      set((state) => ({ 
        history: [...state.history, newItem] 
      }));
    },
    getHistory: () => {
      return get().history;
    },
    clearHistory: () => {
      set({ history: [] });
    }
  }));
  