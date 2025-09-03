import { create } from "zustand";

export const PaginationStore = create((set)=>({
    limit: 6,
    offset: 0,
    setLimit: (value)=> set((state)=>({limit: state.limit + value})),
    setOffset: (value) => set((state)=>({offset: state.offset + value})),
    resetLimit:() => set({limit: 0}),
    resetOffset: () => set({offset: 0}),
}))