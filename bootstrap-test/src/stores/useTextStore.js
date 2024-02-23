import { create } from "zustand";

const useTextStore = create((set) => ({
  text: '',
  setText: (inputText) => set({ text: inputText }),
}));

export default useTextStore;
