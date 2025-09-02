import {create} from "zustand"

export const newPostStore = create((set)=>({
    isActive: false,
    activate: ()=> set((state)=>({isActive: state.isActive = true})),
    deactivate: ()=> set((state)=>({isActive: state.isActive = false})),
}))