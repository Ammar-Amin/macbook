import { create } from "zustand";

export type UseMacbook = {
  color: string;
  scale: number;
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  reset: () => void;
};

const useMacbookStore = create<UseMacbook>((set) => ({
  color: "Silver",
  scale: 0.08,

  setColor: (color) => set({ color }),
  setScale: (scale) => set({ scale }),
  reset: () => set({ color: "Silver", scale: 0.08 }),
}));

export default useMacbookStore;
