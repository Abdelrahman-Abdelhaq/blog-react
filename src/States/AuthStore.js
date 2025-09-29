import { create } from "zustand";

export const authStore = create((set) => ({
    user:null,
    accessToken:null,
    refreshToken:null,
    setAccessToken: (token) => set({ accessToken: token }),
    setRefreshToken: (token) => set({ refreshToken: token }),
    clearTokens: () => set({ accessToken: null, refreshToken: null }),
    setAuth: (user,accessToken,refreshToken) => {
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('accessToken',accessToken)
        localStorage.setItem('refreshToken',refreshToken)
        set({user,accessToken,refreshToken})
    },
    clearAuth: () => {
        localStorage.removeItem('user')
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        set({user: null,accessToken:null,refreshToken:null})
    },
    loadAuthFromStorage: () => {
        const storedUser = localStorage.getItem('user')
        const storedAccessToken = localStorage.getItem('accessToken')
        const storedRefreshToken = localStorage.getItem('refreshToken')
        if(storedUser && storedAccessToken) {
            set({
                user: JSON.parse(storedUser),
                accessToken: storedAccessToken,
                refreshToken: storedRefreshToken
            })
        }
    },
}))