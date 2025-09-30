import { create } from "zustand";

export const editStore = create((set) => ({
    editName: '',
    setEName: (value) => set({editName:value}),
    editMail: '',
    setEMail: (value) => set({editMail:value}) 
}))