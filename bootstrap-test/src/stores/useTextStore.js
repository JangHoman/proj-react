import { create } from "zustand";

export const useTextStore = create((set) => ({
  text: '',
  setText: (inputText) => set({ text: inputText }),
}));

export const useTextStore2 = create((set) => ({
  text: '',
  setText: (inputText) => set({ text: inputText }),
}));

