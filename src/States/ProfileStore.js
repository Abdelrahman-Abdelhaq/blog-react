import { create } from "zustand";

export const profileStore = create((set) => ({
    isInfo: false,
    isEdit: false,
    setIsInfo: (value) => set({isInfo: value}),
    setIsEdit: (value) => set({isEdit:value})
}))