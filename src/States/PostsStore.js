import { create } from "zustand";

export const postsStore = create((set) => ({
    pasta: [],
    setPasta: (value) => set((state)=>({pasta: state.pasta+value})),
}))

