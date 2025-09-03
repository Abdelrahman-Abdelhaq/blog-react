import { create } from "zustand";

export const profileStore = create((set) => ({
    isInfo: true,
    isEdit: false,
    setIsInfo: (value) => set({isInfo: value}),
    setIsEdit: (value) => set({isEdit:value})
}))