import { create } from "zustand";

export const authStore = create((set) => ({
    nowUser : "",
    authenticated : false,
    login : () => set((state) => ({ authenticated : true, nowUser : state.nowUserName})),
    logout : () => set(() => ({ authenticated : false, nowUser : ""})),
}))