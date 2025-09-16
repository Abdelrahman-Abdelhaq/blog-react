import { create } from "zustand";

export const sliceStore = create((set,get) => ({
    slice: 6,
    setSlice: (value) => set((state) => ({
        slice: state.slice + value
    }))
}))