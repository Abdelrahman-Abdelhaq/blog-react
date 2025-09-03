import { create } from "zustand";

export const infoCardStore = create((set)=>({
    modal: false,
    setModal: (value) => set({modal:value})
}))