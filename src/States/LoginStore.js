import { create } from "zustand";
import { userLoginRequest } from "../API/API";
import { authStore } from "./AuthStore";

export const loginStore = create((set,get) => ({
    isEmailErr:null,
    isPassErr:null,
    setIsEErr: (value) => set({isEmailErr:value}),
    setIsPErr: (value) => set({isPassErr:value}),
    isLogged: null,
    setIsLogged: (value) => set({isLogged:value}),
    isPass:'password',
    setIsPass:(value) => set({isPass:value}),
    lEmail:'',
    setLEmail: (value) => set({lEmail:value}),
    lPassword:'',
    setLPassword:(value) => set({lPassword:value}),
    userLoginAPI: async(mail,pass) => {
        const res = await userLoginRequest(mail,pass)

        if(res.status === 200 && res.payload?.accessToken){
            authStore.getState().setAuth(
                res.payload.user,
                res.payload.accessToken,
                res.payload.refreshToken
            )
            set({isLogged:true})
        }
        else if (res.status === 401) {
            set({ isPassErr: "Unauthorized Access!" });
        } else if (res.status === 404) {
            set({ isEmailErr: "Email is not Registered, Please Create New Account!" });
        } else if (res.status === 0) {
            set({ isEmailErr: "Network Error. Please try again later." });
        } else {
            set({ isEmailErr: "Unexpected error occurred." });
        }
    },
}))