import { create } from "zustand";

export const useCloudStore = create((set) => ({
  emission: null,
  update: (name, value) => set({ [name]: value }),
}));
