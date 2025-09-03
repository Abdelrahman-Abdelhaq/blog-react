import { create } from "zustand";

export const searchStore = create((set)=>({
    search: "",
    setSearch: (value)=> set({search:value})
}))