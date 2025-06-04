import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const authStore = create(devtools((set) => ({
    nowUser : "",
    authenticated : false,
    login : () => set((state) => ({ authenticated : true, nowUser : state.nowUserName})),
    logout : () => set(() => ({ authenticated : false, nowUser : ""})),
})))