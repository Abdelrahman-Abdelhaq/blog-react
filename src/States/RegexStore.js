import { create } from "zustand";

export const regexStore = create((set,get) => ({
    emailRegex: /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/,
    passRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/,
    isEF:null,
    setEF:(value) => set({isEF:value}),
    isPF:null,
    setPF:(value) => set({isPF:value}),
}))

